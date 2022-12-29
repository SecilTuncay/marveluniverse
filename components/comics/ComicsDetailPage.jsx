import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncComic,
  getSelectedComic,
} from "../../redux/marvel/marvelSlice";
import Image from "next/image";
import { GoLinkExternal, GoTriangleLeft } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PUBLIC_KEY,
  PRIVATE_KEY,
} from "../../redux/marvelAPI/marvelDatabaseAPIKey";
import GalleryItem from "../ui/GalleryItem";
import md5 from "md5";
import DetailGalleryItem from "../ui/DetailGalleryItem";

const ts = Number(Date.now());
console.log("file: ComicsDetailPage.jsx:20 - ts", ts);

const marvelHash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
console.log("file: ComicsDetailPage.jsx:22 - marvelHash", marvelHash);

const ComicsDetailPage = ({ id }) => {
  const router = useRouter();
  const currentData = useSelector(getSelectedComic);
  const dispatch = useDispatch();

  const {
    characters,
    creators,
    description,
    events,
    images,
    modified,
    pageCount,
    resourceURI,
    series,
    stories,
    thumbnail,
    title,
    urls,
    variants,
  } = { ...(currentData[0] || {}) };

  useEffect(() => {
    dispatch(fetchAsyncComic({ id }));
  }, [dispatch, id]);

  return (
    <>
      <div className="container mx-auto my-5" id="comicsDetailPage">
        <button
          onClick={() => {
            router.back();
          }}
          class="hover:text-primary font-bold leading-6 flex items-center"
        >
          <GoTriangleLeft className="text-2xl inline-block" />
          <span>BACK</span>
        </button>
        {currentData[0] && (
          <div className="flex lg:flex-row flex-col mt-3 gap-5 items-center ">
            <div className="relative w-full lg:w-[25rem] h-[30rem] rounded">
              <Image
                src={thumbnail.path + "." + thumbnail.extension}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="w-full p-5">
              <div className="flex mb-3 font-extrabold text-3xl leading-[1.75rem] gap-1">
                <p>{title}</p>
                <Link href={urls[0].url} target="_blank">
                  <GoLinkExternal className="text-green-700" />
                </Link>
              </div>
              <div className="my-4 font-[500] text-lg">
                <span className="text-secondary mr-1 font-bold">
                  Total Pages :{" "}
                </span>
                <span className=""># {pageCount}</span>
              </div>

              <div className="text-xl font-semibold mb-5">
                {description === ""
                  ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate recusandae nulla at commodi non nemo, laudantium vel reiciendis itaque quia voluptates facilis"
                  : `${description}`}
              </div>
              <h4 className="text-lg font-bold mb-2">Characters :</h4>
              <div
                className="border-primary border-[1px]
                  scrollbar-thin  
                  scrollbar-thumb-primary 
                  scrollbar-track-gray-300
                  h-[15rem] 
                  overflow-y-scroll 
                  px-2"
              >
                <div className="h-[18rem]">
                  {characters.items.map((character, index) => {
                    return (
                      <Link
                        href={`${character.resourceURI}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${marvelHash}`}
                        target="_blank"
                        className="block my-2 bg-white bg-opacity-25 p-2 hover:border-l-4 hover:border-primary"
                        key={index}
                      >
                        {character.name} /{character.resourceURI}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2 mt-4">Creators :</h4>
              <div
                className="border-primary border-[1px]
                  scrollbar-thin  
                  scrollbar-thumb-primary 
                  scrollbar-track-gray-300
                  h-[15rem] 
                  overflow-y-scroll 
                  px-2"
              >
                <div className="h-[18rem]">
                  {creators.items.map((creator, index) => {
                    return (
                      <div
                        className="block my-2 bg-white bg-opacity-25 p-2 hover:border-l-4 hover:border-primary"
                        key={index}
                      >
                        {creator.name} /{" "}
                        <span className="capitalize">{creator.role}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ComicsDetailPage;

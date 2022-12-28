import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCharacter,
  getSelectedCharacter,
} from "../../redux/marvel/marvelSlice";
import Image from "next/image";
import { GoLinkExternal, GoTriangleLeft } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PUBLIC_KEY,
  PRIVATE_KEY,
} from "../../redux/marvelAPI/marvelDatabaseAPIKey";
import md5 from "md5";

const ts = Number(Date.now());

const marvelHash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

const CharactersDetailPage = ({ id }) => {
  const router = useRouter();
  const currentData = useSelector(getSelectedCharacter);
  const dispatch = useDispatch();

  console.log(currentData[0]);

  const {
    name,
    description,
    series,
    comics,
    stories,
    thumbnail,
    events,
    urls,
    resourceURI,
    modified,
  } = { ...(currentData[0] || {}) };

  useEffect(() => {
    dispatch(fetchAsyncCharacter({ id }));
  }, [dispatch, id]);

  return (
    <>
      <div className="container mx-auto my-5" id="charactersDetailPage">
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
                alt={name}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="w-full p-5">
              <div className="flex mb-3 font-extrabold text-3xl leading-[1.75rem] gap-1">
                <p>{name}</p>/<p>{new Date(modified).getFullYear()}</p>
                <Link href={urls[0].url} target="_blank">
                  <GoLinkExternal className="text-green-700" />
                </Link>
              </div>
              <div className="flex justify-start items-center gap-4 my-4">
                <div className="text-white flex flex-col items-center">
                  <p className="mb-1 text-secondary">Series</p>
                  <p className="rounded-full bg-secondary w-12 h-12 flex justify-center items-center">
                    <span className="border-green-400 border-2 w-9 h-9 rounded-full block leading-8 text-center text-xl">
                      {series.available}
                    </span>
                  </p>
                </div>
                <div className="text-white flex flex-col items-center">
                  <p className="mb-1 text-secondary">Comics</p>
                  <p className="rounded-full bg-secondary w-12 h-12 flex justify-center items-center">
                    <span className="border-green-400 border-2 w-9 h-9 rounded-full block leading-8 text-center text-xl">
                      {comics.available}
                    </span>
                  </p>
                </div>
                <div className="text-white flex flex-col items-center">
                  <p className="mb-1 text-secondary">Stories</p>
                  <p className="rounded-full bg-secondary w-12 h-12 flex justify-center items-center">
                    <span className="border-green-400 border-2 w-9 h-9 rounded-full block leading-8 text-center text-xl">
                      {stories.available}
                    </span>
                  </p>
                </div>
                <div className="text-white flex flex-col items-center">
                  <p className="mb-1 text-secondary">Events</p>
                  <p className="rounded-full bg-secondary w-12 h-12 flex justify-center items-center">
                    <span className="border-green-400 border-2 w-9 h-9 rounded-full block leading-8 text-center text-xl">
                      {events.available}
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-xl font-semibold mb-5">
                {description === ""
                  ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate recusandae nulla at commodi non nemo, laudantium vel reiciendis itaque quia voluptates facilis"
                  : `${description}`}
              </div>
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
                  {comics.items.map((comic, index) => {
                    return (
                      <Link
                        className="block my-2 bg-white bg-opacity-25 p-2 hover:border-l-4 hover:border-primary"
                        href={comic.resourceURI}
                        key={index}
                      >
                        {comic.name}
                      </Link>
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

export default CharactersDetailPage;

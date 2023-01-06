import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncComic,
  getSelectedComic,
} from "../../redux/marvel/marvelSlice";
import Image from "next/image";
import { GoLinkExternal, GoTriangleLeft } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/router";

const ComicsDetailPage = ({ comicsID }) => {
  const router = useRouter();
  const currentComicData = useSelector(getSelectedComic);

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
  } = { ...(currentComicData[0] || {}) };

  useEffect(() => {
    dispatch(fetchAsyncComic({ comicsID }));
  }, [dispatch, comicsID]);

  return (
    <>
      <div
        className="container mx-auto my-5 text-white w-11/12"
        id="comicsDetailPage"
      >
        <button
          onClick={() => {
            router.back();
          }}
          className="hover:text-primary font-bold leading-6 flex items-center"
        >
          <GoTriangleLeft className="text-2xl inline-block" />
          <span>BACK</span>
        </button>

        {currentComicData[0] && (
          <div className="flex lg:flex-row flex-col mt-6 gap-5">
            <div className="relative w-full lg:w-[25rem] h-[30rem] rounded">
              <Image
                src={thumbnail.path + "." + thumbnail.extension}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="w-full p-5 min-h-[30rem]">
              <div className="flex mb-3 font-extrabold text-3xl leading-[1.75rem] gap-1">
                <p>{title}</p>
                <Link href={urls[0].url} target="_blank">
                  <GoLinkExternal className="text-green-700" />
                </Link>
              </div>
              <div className="my-4 font-[500] text-lg flex items-center gap-2">
                <span className="mr-1 font-bold">Total Pages :</span>

                <div className="text-white flex flex-col items-center">
                  <p className="rounded-full bg-secondary w-12 h-12 flex justify-center items-center">
                    <span className="border-green-400 border-2 w-10 h-10 rounded-full block leading-9 text-center text-md font-bold">
                      {pageCount}
                    </span>
                  </p>
                </div>
              </div>

              <div className="text-xl font-semibold mb-5">
                {description === ""
                  ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate recusandae nulla at commodi non nemo, laudantium vel reiciendis itaque quia voluptates facilis"
                  : `${description}`}
              </div>

              {characters.available > 0 ? (
                <div>
                  <h4 className="text-lg font-bold mb-2">Characters :</h4>
                  <div
                    className="scrollbar-thin  
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
                            href={`/characters/${
                              character.resourceURI.split("characters/")[1]
                            }`}
                            className="block my-2 bg-white bg-opacity-25 p-2 hover:border-l-4 hover:border-primary"
                            key={index}
                          >
                            {character.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : null}
              {creators.available > 0 ? (
                <div>
                  <h4 className="text-lg font-bold mb-2 mt-4">Creators :</h4>
                  <div
                    className="scrollbar-thin  
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
              ) : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ComicsDetailPage;

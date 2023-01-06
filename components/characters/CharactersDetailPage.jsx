import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCharacter,
  getSelectedCharacter,
} from "../../redux/marvel/marvelSlice";
import Image from "next/image";
import { GoLinkExternal, GoTriangleLeft } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/router";

const CharactersDetailPage = ({ charactersID }) => {
  const router = useRouter();
  const currentCharacterData = useSelector(getSelectedCharacter);
  const dispatch = useDispatch();

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
  } = { ...(currentCharacterData[0] || {}) };

  useEffect(() => {
    dispatch(fetchAsyncCharacter({ charactersID }));
  }, [dispatch, charactersID]);

  const charactersItemsInfo = series && [
    { id: 0, title: "Series", number: series.available },
    { id: 1, title: "Comics", number: comics.available },
    { id: 2, title: "Stories", number: stories.available },
    { id: 3, title: "Events", number: events.available },
  ];

  return (
    <>
      <div
        className="container mx-auto my-5 text-white w-11/12"
        id="charactersDetailPage"
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
        {currentCharacterData[0] && (
          <div className="flex lg:flex-row flex-col mt-6 gap-5">
            <div className="relative w-full lg:w-[25rem] h-[30rem] rounded">
              <Image
                src={thumbnail.path + "." + thumbnail.extension}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="w-full p-5 h-[30rem]">
              <div className="flex mb-3 font-extrabold text-3xl leading-[1.75rem] gap-1">
                <p>{name}</p>/<p>{new Date(modified).getFullYear()}</p>
                <Link href={urls[0].url} target="_blank">
                  <GoLinkExternal className="text-green-700" />
                </Link>
              </div>

              <div className="flex justify-start items-center gap-4 my-4 ">
                {charactersItemsInfo.map((item) => {
                  return (
                    <div key={item.id} className=" flex flex-col items-center">
                      <p className="mb-1">{item.title}</p>
                      <p className="rounded-full bg-secondary w-12 h-12 flex justify-center items-center">
                        <span className="border-green-400 border-2 w-10 h-10 rounded-full block leading-9 text-center text-md">
                          {item.number}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="text-xl font-semibold mb-5">
                {description === ""
                  ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate recusandae nulla at commodi non nemo, laudantium vel reiciendis itaque quia voluptates facilis"
                  : `${description}`}
              </div>
              <div
                className="scrollbar-thin  
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
                        href={`/comics/${
                          comic.resourceURI.split("comics/")[1]
                        }`}
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

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCharacter,
  getSelectedCharacter,
} from "../../redux/marvel/marvelSlice";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";
import {
  PUBLIC_KEY,
  PRIVATE_KEY,
} from "../../redux/marvelAPI/marvelDatabaseAPIKey";
import md5 from "md5";

const ts = Number(Date.now());

const marvelHash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

const CharactersDetailPage = ({ id }) => {
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
  debugger;
  return (
    <>
      {currentData[0] && (
        <div className="container mx-auto my-10">
          <div className="flex flex-row gap-5 items-center">
            <div className="relative w-[25rem] h-[30rem] rounded">
              <Image
                src={thumbnail.path + "." + thumbnail.extension}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="w-full p-5">
              <h3 className="font-extrabold text-3xl mb-5 flex">
                <div>
                  <span
                    className="relative 
                  font-bold
                  leading-[1.75rem] 
                  mt-6 mb-6 pl-2
                  before:content-[''] 
                  before:bg-primary 
                  before:block 
                  before:absolute 
                  before:h-[2px] 
                  before:w-[20px] 
                  before:left-[53px] 
                  before:top-[3px] 
                  before:-rotate-45 
                  before:skew-x-[45deg] 
                  before:origin-bottom-left
                  
                  after:content-[''] 
                  after:bg-primary 
                  after:block 
                  after:absolute 
                  after:h-[2px] 
                  after:w-[20px] 
                  after:left-[12px] 
                  after:top-[35px] 
                  after:-rotate-45 
                  after:skew-x-[45deg] 
                  after:origin-top-right"
                  >
                    {name}
                  </span>
                  /{" "}
                  <span className="mr-5">
                    {new Date(modified).getFullYear()}
                  </span>{" "}
                </div>
                <div>
                  <Link href={urls[0].url} target="_blank">
                    <GoLinkExternal className="text-green-700" />
                  </Link>
                </div>
              </h3>
              <div className="flex justify-start items-center gap-4 my-6">
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
                className="
                  shadow-2xl 
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
        </div>
      )}
    </>
  );
};

export default CharactersDetailPage;

{
  /*   <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="background-image: url('/img/card-left.jpg')"
          title="Woman holding a mug"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-4 relative"></div>
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div> */
}

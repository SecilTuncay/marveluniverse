import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCharacters,
  getAllCharacters,
} from "../../redux/marvel/marvelSlice";

import GalleryItem from "./GalleryItem";

const MainGallery = () => {
  const allCharacters = useSelector(getAllCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCharacters());
  }, [dispatch]);
  return (
    <div id="mainGallery" className="container mx-auto">
      <div className="flex justify-center items-center mx-[7rem] my-4">
        <h2
          className="relative 
        font-bold
        md:text-[1.30rem] text-[1rem]
        leading-[1.75rem] 
        mt-4 mb-4
        text-white

        before:content-[''] 
        before:bg-primary 
        before:block 
        before:absolute 
        before:h-[2px] 
        before:w-[20px] 
        before:left-[165px] 
        before:top-[1px] 
        before:-rotate-45 
        before:skew-x-[45deg] 
        before:origin-bottom-left
        
        after:content-[''] 
        after:bg-primary 
        after:block 
        after:absolute 
        after:h-[2px] 
        after:w-[20px] 
        after:left-[125px] 
        after:top-[28px] 
        after:-rotate-45 
        after:skew-x-[45deg] 
        after:origin-top-right"
        >
          WELCOME TO MARVEL UNIVERSE!
        </h2>
      </div>
      <div
        className="
        shadow-2xl 
        scrollbar-thin  
        scrollbar-thumb-primary 
        scrollbar-track-gray-300
        h-[25rem] 
        overflow-y-scroll 
        flex items-center 
        px-2
        mx-8
        backdrop-blur-sm
        -backdrop-hue-rotate-180"
      >
        <div className="h-[22rem] flex py-1">
          {allCharacters &&
            allCharacters.map((character, index) => {
              return <GalleryItem key={index} characterData={character} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MainGallery;
/* rounded-[0.75rem] border-l-[0.5rem] border-t-[0.5rem] border-gray-800 */

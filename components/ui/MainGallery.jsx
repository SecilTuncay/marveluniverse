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

  console.log(allCharacters);
  useEffect(() => {
    dispatch(fetchAsyncCharacters());
  }, [dispatch]);
  return (
    <div className="container mx-auto mt-[9rem]">
      <div
        className="bg-gray-300
        shadow-2xl 
        scrollbar-thin  
        scrollbar-thumb-primary 
        scrollbar-track-gray-300
        h-[25rem] 
        overflow-y-scroll 
        flex items-center 
        px-2"
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

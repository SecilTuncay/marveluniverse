import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCharacters,
  getAllCharacters,
} from "../../redux/marvel/marvelSlice";

import ListItem from "../ListItem";
import GalleryItem from "./GalleryItem";

const MainGallery = () => {
  const allCharacters = useSelector(getAllCharacters);
  const dispatch = useDispatch();

  console.log(allCharacters);
  useEffect(() => {
    dispatch(fetchAsyncCharacters());
  }, [dispatch]);
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto h-[150px] w-full border-primary border-2 flex">
        {allCharacters &&
          allCharacters.map((character, index) => {
            return <GalleryItem key={index} characterData={character} />;
          })}
      </div>
    </div>
  );
};

export default MainGallery;

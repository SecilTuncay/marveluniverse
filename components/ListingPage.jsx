import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCharacters,
  getAllCharacters,
} from "../redux/marvel/marvelSlice";
import ListItem from "./ListItem";

const ListingPage = () => {
  const allCharacters = useSelector(getAllCharacters);
  const dispatch = useDispatch();

  console.log(allCharacters);
  useEffect(() => {
    dispatch(fetchAsyncCharacters());
  }, [dispatch]);

  return (
    <div className="container mx-auto my-5 bg-white border-purple-800">
      <p>listing page</p>
      <div className="flex flex-row flex-wrap justify-start">
        {allCharacters &&
          allCharacters.map((character, index) => {
            return <ListItem key={index} characterData={character} />;
          })}
      </div>
    </div>
  );
};

export default ListingPage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCharacters,
  getAllCharacters,
} from "../../redux/marvel/marvelSlice";
import CharactersListItem from "./CharactersListItem";
import SearchBar from "../ui/SearchBar";
import Heading from "../ui/Heading";

const CharactersMainPage = () => {
  const allCharacters = useSelector(getAllCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCharacters());
  }, [dispatch]);

  return (
    <div id="charactersMainPage" className="container mx-auto my-1 md:my-5">
      <div className="flex flex-col md:flex-row justify-between items-center md:mx-[4.5rem] my-4 ">
        <Heading headingContent="CHARACTERS LIST" />

        <SearchBar placeholder="Find me, Hero!" data={allCharacters} />
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {allCharacters &&
          allCharacters.map((character, index) => {
            return (
              <CharactersListItem
                key={index}
                characterData={character}
                dataType={1}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CharactersMainPage;

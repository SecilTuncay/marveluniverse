import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCharacters,
  getAllCharacters,
} from "../../redux/marvel/marvelSlice";
import CharactersListItem from "./CharactersListItem";
import SearchBar from "../ui/SearchBar";

const CharactersMainPage = () => {
  const allCharacters = useSelector(getAllCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCharacters());
  }, [dispatch]);

  return (
    <div id="charactersMainPage" className="container mx-auto my-1 md:my-5">
      <div className="flex flex-col md:flex-row justify-between items-center md:mx-[4.5rem] my-4">
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
        after:left-[16px] 
        after:top-[28px] 
        after:-rotate-45 
        after:skew-x-[45deg] 
        after:origin-top-right"
        >
          CHARACTERS LIST
        </h2>
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

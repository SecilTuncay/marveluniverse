import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCharacters,
  getAllCharacters,
} from "../../redux/marvel/marvelSlice";
import CharactersListItem from "./CharactersListItem";

const CharactersMainPage = () => {
  const allCharacters = useSelector(getAllCharacters);
  const dispatch = useDispatch();

  console.log(allCharacters);
  useEffect(() => {
    dispatch(fetchAsyncCharacters());
  }, [dispatch]);

  return (
    <div className="container mx-auto my-5">
      <h2
        className="relative 
        font-bold
        text-[1.30rem]
        leading-[1.75rem] 
        mt-6 mb-4 pl-2
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
        after:top-[23px] 
        after:-rotate-45 
        after:skew-x-[45deg] 
        after:origin-top-right"
      >
        CHARACTERS LIST
      </h2>
      <div className="flex flex-row flex-wrap justify-start">
        {allCharacters &&
          allCharacters.map((character, index) => {
            return <CharactersListItem key={index} characterData={character} />;
          })}
      </div>
    </div>
  );
};

export default CharactersMainPage;

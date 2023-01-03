import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncComics, getAllComics } from "../../redux/marvel/marvelSlice";
import ComicsListItem from "./ComicsListItem";
import SearchBar from "../ui/SearchBar";

const ComicsMainPage = () => {
  const allComics = useSelector(getAllComics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncComics());
  }, [dispatch]);

  return (
    <div id="comicsMainPage" className="container mx-auto my-1 md:my-5">
      <div className="flex justify-between items-center mx-[7rem] my-4">
        <h2
          className="relative 
        font-bold
        md:text-[1.30rem] text-[1rem]
        leading-[1.75rem] 
        mt-4 mb-4

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
          COMICS LIST
        </h2>
        <SearchBar placeholder="Read me, Hero!" data={allComics} dataType={0} />
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {allComics &&
          allComics.map((comic, index) => {
            return <ComicsListItem key={index} comicsData={comic} />;
          })}
      </div>
    </div>
  );
};

export default ComicsMainPage;

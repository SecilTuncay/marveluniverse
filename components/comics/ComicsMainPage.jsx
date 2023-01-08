import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncComics, getAllComics } from "../../redux/marvel/marvelSlice";
import ComicsListItem from "./ComicsListItem";
import SearchBar from "../ui/SearchBar";
import Heading from "../ui/Heading";

const ComicsMainPage = () => {
  const allComics = useSelector(getAllComics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncComics());
  }, [dispatch]);

  return (
    <div id="comicsMainPage" className="container mx-auto my-1 md:my-5">
      <div className="flex flex-col md:flex-row justify-between items-center md:mx-[4.5rem] my-4">
        <Heading headingContent="COMICS LIST" />
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

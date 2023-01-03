import React, { useState } from "react";
import Link from "next/link";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SearchBar = ({ placeholder, data, dataType }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  let tempLink;
  let tempValue;
  if (dataType === 0) {
    tempLink = "/comics/";
    tempValue = "title";
  } else {
    tempLink = "/characters/";
    tempValue = "name";
  }

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value[tempValue].toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="rounded-3xl px-2 bg-slate-50 relative w-[15rem]">
      <div className="flex items-center justify-between p-1">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          className="bg-transparent border-none focus:outline-none"
        />
        <div className="text-base text-primary" onClick={() => clearInput()}>
          {filteredData.length === 0 ? (
            <BiSearchAlt2 />
          ) : (
            <AiOutlineCloseCircle />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div
          className="p-2 w-[13rem] ml-1 bg-white h-[200px] overflow-hidden overflow-y-auto z-10 absolute scrollbar-thin  
        scrollbar-thumb-primary 
        scrollbar-track-gray-300"
        >
          {filteredData.map((value, key) => {
            return (
              <Link
                href={`${tempLink}${value.id}`}
                key={value.id}
                className="my-1 px-2 text-sm hover:bg-gray-500 w-full inline-block"
              >
                {value[tempValue]}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
/* 
<div className="search">
<div className="searchInputs">
  <input
    type="text"
    placeholder={placeholder}
    value={wordEntered}
    onChange={handleFilter}
  />
  <div className="searchIcon">
    {filteredData.length === 0 ? (
      <SearchIcon />
    ) : (
      <CloseIcon id="clearBtn" onClick={clearInput} />
    )}
  </div>
</div>
{filteredData.length != 0 && (
  <div className="dataResult">
    {filteredData.slice(0, 15).map((value, key) => {
      return (
        <a className="dataItem" href={value.link} target="_blank">
          <p>{value.title} </p>
        </a>
      );
    })}
  </div>
)}
</div> */

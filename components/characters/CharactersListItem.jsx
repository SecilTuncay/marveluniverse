import React from "react";
import Image from "next/image";
import Link from "next/link";

const CharactersListItem = (props) => {
  const { characterData } = props;

  const { id, name, description, thumbnail, comics, series, stories, urls } =
    characterData;

  const imagePath = thumbnail.path + "." + thumbnail.extension;

  return (
    <>
      <Link href={`/characters/${id}`}>
        <div
          key={id}
          className="shadow-lg md:h-[22rem] md:w-[12rem] mx-4 h-[15rem] w-[10rem] bg-secondary hover:bg-primary transition-all m-2 relative overflow-hidden cornered"
          id="charactersListItem"
        >
          <div className="relative w-full h-2/3 border-b-4 border-primary overflow-hidden">
            <Image
              src={imagePath}
              alt={name}
              fill
              object-fit="cover"
              className="hover:scale-125 transition-all"
            />
          </div>
          <div>
            <div className="px-6 py-4 text-white">
              <div className="font-bold text-[1rem] h-[2.5rem] mb-4">
                {name}
              </div>
              <p className="text-xs max-h-[2rem] overflow-hidden">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CharactersListItem;

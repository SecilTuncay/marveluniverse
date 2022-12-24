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
          className="max-w-sm shadow-lg h-[25rem] w-[15rem] bg-secondary m-2 relative overflow-hidden cornered"
        >
          <div className="relative w-full h-2/3 border-b-4 border-primary">
            <Image src={imagePath} alt={name} fill object-fit="contain" />
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

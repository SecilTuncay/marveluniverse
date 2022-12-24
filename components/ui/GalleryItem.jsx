import React from "react";
import Image from "next/image";

const GalleryItem = (props) => {
  const { characterData } = props;

  const { id, name, description, thumbnail, comics, series, stories, urls } =
    characterData;

  const imagePath = thumbnail.path + "." + thumbnail.extension;
  return (
    <div
      key={id}
      className="shadow-[0_7px_7px_0_rgba(117,112,112,0.65)] w-[12rem] m-2 flex flex-col overflow-hidden relative cornered bg-secondary text-white"
    >
      <div className="relative w-full h-2/3 border-b-4 border-primary ">
        <Image src={imagePath} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="mt-3 h-1/3">
        <div className="text-[1rem] text-lg font-extrabold p-2 h-[5rem]">
          {name}
        </div>
        <div className="text-[1rem] text-xs p-2">2022</div>
      </div>
    </div>
  );
};

export default GalleryItem;

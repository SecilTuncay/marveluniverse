import React from "react";
import Image from "next/image";

const GalleryItem = (props) => {
  const { characterData } = props;

  const { id, name, description, thumbnail, comics, series, stories, urls } =
    characterData;

  const imagePath = thumbnail.path + "." + thumbnail.extension;
  return (
    <div key={id} className="shadow-lg h-[25rem] w-[15rem] bg-secondary m-2">
      <div className="relative w-full h-2/3 border-b-4 border-primary">
        <Image
          src={imagePath}
          alt={name}
          object-fit="cover"
          width={50}
          height={60}
        />
      </div>
      <div>
        <div className="px-6 py-4 text-white">
          <div className="font-bold text-[1rem] mb-2">{name}</div>
          <p className="text-xs">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {comics.available}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {series.available}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {stories.available}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;

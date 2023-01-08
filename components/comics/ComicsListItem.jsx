import React from "react";
import Image from "next/image";
import Link from "next/link";

const ComicsListItem = (props) => {
  const { comicsData } = props;

  const {
    id,
    characters,
    creators,
    description,
    events,
    images,
    modified,
    pageCount,
    resourceURI,
    series,
    stories,
    thumbnail,
    title,
    urls,
    variants,
  } = comicsData;

  const imagePath = thumbnail.path + "." + thumbnail.extension;

  return (
    <>
      <Link href={`/comics/${id}`}>
        <div
          key={id}
          className="shadow-lg md:h-[22rem] md:w-[12rem] mx-4 h-[30rem] w-[20rem] bg-secondary hover:bg-primary transition-all m-2 relative overflow-hidden cornered"
          id="comicsListItem"
        >
          <div className="relative md:w-[13rem] md:h-[15rem] w-full h-[25rem] border-b-4 border-primary overflow-hidden">
            <Image
              src={imagePath}
              alt={title}
              fill
              object-fit="cover"
              className="hover:scale-125 transition-all"
            />
          </div>
          <div>
            <div className="px-6 py-4 text-white">
              <div className="font-bold text-[0.8rem] h-[2.5rem] mb-4">
                {title}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ComicsListItem;

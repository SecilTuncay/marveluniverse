import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-secondary h-auto py-2">
      <div className="container mx-auto flex justify-start items-center">
        <div className="mr-5 relative">
          <Image
            src="/images/logo.png"
            alt="Picture of the author"
            width={102}
            height={40}
          />
        </div>
        <nav className="h-full">
          <ul className="flex flex-row gap-2 text-white text-xs">
            <li className="px-[5px] py-[5px] hover:text-primary cursor-pointer">
              Characters
            </li>
            <li className="px-[5px] py-[5px] hover:text-primary cursor-pointer">
              Comics
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

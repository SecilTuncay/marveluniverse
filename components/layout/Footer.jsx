import React from "react";
import Image from "next/image";

import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-16 md:h-[9rem] fixed bottom-0">
      <div className="bg-secondary h-full text-white uppercase text-[0.6rem] flex items-center">
        <div className="container mx-4 md:2xl:mx-auto flex flex-col md:flex-row flex-1 justify-center md:justify-start items-center py-5 my-2">
          <div className="mr-8 relative flex-row md:flex-col items-center hidden md:block">
            <Image
              src="/images/firstLetterLogo.png"
              alt="Picture of the author"
              width={90}
              height={110}
            />
          </div>
          <div className="flex flex-row justify-center md:justify-between items-start w-full">
            <ul className="hidden md:block">
              <li className="py-1 hover:text-primary">ABOUT MARVEL</li>
              <li className="py-1 hover:text-primary">help/faqs</li>
              <li className="py-1 hover:text-primary">careers</li>
              <li className="py-1 hover:text-primary">INTERNSHIPS</li>
            </ul>
            <ul className="hidden md:block">
              <li className="py-1 hover:text-primary">ADVERTISING</li>
              <li className="py-1 hover:text-primary">DISNEY+</li>
              <li className="py-1 hover:text-primary">MARVELHQ.COM</li>
              <li className="py-1 hover:text-primary">INTERNSHIPS</li>
              <li className="py-1 hover:text-primary">REDEEM DIGITAL COMICS</li>
            </ul>
            <ul className="hidden md:block">
              <li className="py-1 hover:text-primary">ADVERTISING</li>
              <li className="py-1 hover:text-primary">DISNEY+</li>
              <li className="py-1 hover:text-primary">MARVELHQ.COM</li>
              <li className="py-1 hover:text-primary">INTERNSHIPS</li>
              <li className="py-1 hover:text-primary">REDEEM DIGITAL COMICS</li>
            </ul>
            <div className="py-2 md:py-5">
              <h5 className="mb-2 text-center text-primary">follow marvel</h5>
              <div className="flex flex-wrap flex-row gap-4 w-full ">
                <BsFacebook className="text-sm hover:text-primary" />
                <BsTwitter className="text-sm hover:text-primary" />
                <BsInstagram className="text-sm hover:text-primary" />
                <BsYoutube className="text-sm hover:text-primary" />
                <BsPinterest className="text-sm hover:text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

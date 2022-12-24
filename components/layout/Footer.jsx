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
    <div className="fixed bottom-0 w-full h-32">
      <div className="bg-secondary h-full p-6 text-white uppercase text-[0.6rem] flex items-center">
        <div className="container mx-auto flex flex-1 justify-start items-start ">
          <div className="mr-8 relative">
            <Image
              src="/images/firstLetterLogo.png"
              alt="Picture of the author"
              width={62}
              height={90}
            />
          </div>
          <div className="flex justify-between items-start w-full">
            <ul>
              <li className="py-1">ABOUT MARVEL</li>
              <li className="py-1">help/faqs</li>
              <li className="py-1">careers</li>
              <li className="py-1">INTERNSHIPS</li>
            </ul>
            <ul>
              <li className="py-1">ADVERTISING</li>
              <li className="py-1">DISNEY+</li>
              <li className="py-1">MARVELHQ.COM</li>
              <li className="py-1">INTERNSHIPS</li>
              <li className="py-1">REDEEM DIGITAL COMICS</li>
            </ul>
            <ul>
              <li className="py-1">ADVERTISING</li>
              <li className="py-1">DISNEY+</li>
              <li className="py-1">MARVELHQ.COM</li>
              <li className="py-1">INTERNSHIPS</li>
              <li className="py-1">REDEEM DIGITAL COMICS</li>
            </ul>
            <div>
              <h5 className="mb-2 text-center">follow marvel</h5>
              <div className="flex flex-wrap flex-row gap-4 w-full">
                <BsFacebook className="text-sm" />
                <BsTwitter className="text-sm" />
                <BsInstagram className="text-sm" />
                <BsYoutube className="text-sm" />
                <BsPinterest className="text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

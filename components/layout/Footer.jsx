import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="bg-secondary h-auto py-2 text-white uppercase text-[0.6rem]">
        <div className="container mx-auto flex justify-start items-center">
          <div className="mr-8 relative">
            <Image
              src="/images/firstLetterLogo.png"
              alt="Picture of the author"
              layout="fill"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <ul>
              <li className="py-1">ABOUT MARVEL</li>
              <li className="py-1">help/faqs</li>
              <li className="py-1">careers</li>
              <li className="py-1">INTERNSHIPS</li>
            </ul>
            <ul>
              <li>ADVERTISING</li>
              <li>DISNEY+</li>
              <li>MARVELHQ.COM</li>
              <li>INTERNSHIPS</li>
              <li>REDEEM DIGITAL COMICS</li>
            </ul>
            <div>
              <h5>follow marvel</h5>
              <div>
                <div>facebook</div>
                <div>TWITTER</div>
                <div>INSTAGRAM</div>
                <div>youtube</div>
                <div>PINTEREST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

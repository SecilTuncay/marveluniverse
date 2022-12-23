import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-secondary h-auto p-2">
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
            <Link href="/characters">
              <p className="px-[5px] py-[5px] hover:text-primary cursor-pointer">
                Characters
              </p>
            </Link>
            <Link href="/characters">
              <p className="px-[5px] py-[5px] hover:text-primary cursor-pointer">
                Comics
              </p>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

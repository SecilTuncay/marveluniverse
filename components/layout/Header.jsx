import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div
      id="header"
      className="bg-secondary h-auto flex flex-col justify-center items-center w-full "
    >
      <div className="relative flex  justify-center border-borderGray border-b-[0.08rem] w-full">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Picture of the author"
            width={122}
            height={47}
          />
        </Link>
      </div>
      <nav className="h-full">
        <ul className="flex flex-row text-white text-sm font-bold">
          <Link href="/characters">
            <p className="px-[5px] py-[5px] hover:text-primary cursor-pointer border-borderGray border-l-[0.08rem] border-r-[0.08rem]">
              CHARACTERS
            </p>
          </Link>
          <Link href="/characters">
            <p className="px-[5px] py-[5px] hover:text-primary cursor-pointer  border-borderGray border-r-[0.08rem]">
              COMICS
            </p>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import Image from "next/image";
import LogoImage from "../public/assest/logo.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  console.log(LogoImage);
  return (
    <header className="flex items-center justify-between p-4 shadow-[0px_20px_10px_8px_rgba(0,_0,_0,_0.1)] backdrop-blur-md sticky top-0 z-50 bg-gradient-to-r from-gray-400 to-gray-300">
      <Image src={LogoImage} alt="logo" className="cursor-pointer" />
      <FaBars className="block md:hidden" size={30} />
      <div className="pr-2 hidden md:block">
        <ul className="flex justify-center items-center gap-6 text-[#5d5d5d]">
          <li>About</li>
          <li>Features</li>
          <li>Customers</li>
          <li>Updates</li>
          <li>Help</li>
          <button
            className="rounded-md bg-neutral-800 py-2
          px-4 text-neutral-300"
          >
            Get for free
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;

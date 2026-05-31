import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
interface NavbarProps {
  logoText?: string;
}
const Navbar: React.FC<NavbarProps> = ({ logoText }) => {
  return (
    <>
      <div className="flex flex-row justify-around px-4 py-4 text-white">
        <div>
          <p className="text-3xl font-bold">WEAR</p>
        </div>
        <div>
          <ul className="flex flex-row gap-4 text-lg font-normal">
            <li>Home</li>
            <li>Collection</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <IoSearch className="w-6 h-6" />
          <div className="flex flex-row gap-2 items-center"><FaRegUser className="w-5 h-5"/>
          <div className="text-xl!">Login</div></div>
           
          <SlBasket className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};
export default Navbar;

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
      <div>
        <div>
          <p>WEAR</p>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Collection</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <IoSearch />
<FaRegUser/><span>Login</span>
<SlBasket/>
        </div>
         
      </div>
    </>
  );
};
export default Navbar;

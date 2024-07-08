import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { FaUserAstronaut } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-8  shadow-lg sticky top-0 bg-white z-30 ">
        <Link to="/">
          <img
            className="w-20 cursor-pointer"
            src="./ForkLore.jpg"
            alt="Logo"
          />
        </Link>
        <ul className="flex space-x-8 cursor-pointer">
          <Link to="/search">
            <li className="flex items-center mt-7">
              <IoSearch />
              <span className="ml-2">Search</span>
            </li>
          </Link>
          <Link to="/offers">
            <li className="flex items-center mt-7">
              <BiSolidOffer />
              <span className="ml-2">Offers</span>
            </li>
          </Link>
          <li className="flex items-center">
            <IoIosHelpBuoy />
            <span className="ml-2">Help</span>
          </li>
          <Link to="/signin">
            <li className="flex items-center mt-7">
              <FaUserAstronaut />
              <span className="ml-2">Sign In</span>
            </li>
          </Link>
          <Link to="/cart">
            <li className="flex items-center mt-7">
              <FaCartShopping />
              <span className="ml-2">Cart</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;

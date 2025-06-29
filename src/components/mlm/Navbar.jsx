import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import snth from "../assets/snth.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img src={snth} alt="Logoipsum" style={{ width: "100px" }} />
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="p-4">Home</li>
        </Link>
        <ScrollLink to="about" smooth={true} duration={500}>
          <li className="p-4 cursor-pointer">About</li>
        </ScrollLink>
        <Link to="/contact-vendor">
          <li className="p-4">Vendors</li>
        </Link>
        <ScrollLink to="packages" smooth={true} duration={500}>
          <li className="p-4 cursor-pointer">Packages</li>
        </ScrollLink>
        <Link to="/product">
          <li className="p-4">Products</li>
        </Link>
        <Link to="/signin">
          <li className="p-4">Signin</li>
        </Link>
      </ul>
      <div
        onClick={handleNav}
        className="fixed right-3 block md:hidden bg-black/50 p-3 rounded-full"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img src={snth} alt="Logoipsum" style={{ width: "100px" }} />
        <Link to="/">
          <li className="p-4 border-b border-gray-600">Home</li>
        </Link>
        <ScrollLink to="about" smooth={true} duration={500}>
          <li className="p-4 border-b border-gray-600">About</li>
        </ScrollLink>
        <Link to="/contact-vendor">
          <li className="p-4 border-b border-gray-600">Vendors</li>
        </Link>
        <ScrollLink to="packages" smooth={true} duration={500}>
          <li className="p-4 border-b border-gray-600">Packages</li>
        </ScrollLink>
        <Link to="/product">
          <li className="p-4 border-b border-gray-600">Products</li>
        </Link>
        <Link to="/signin">
          <li className="p-4">Signin</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

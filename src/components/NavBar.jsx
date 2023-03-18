import React, { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import Offcanvas from "./Offcanvas";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <AiFillShopping className="text-5xl" />
          <span className="ml-3 text-xl">Shop</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Gallery</a>
          <a className="mr-5 hover:text-gray-900">Products</a>
          <a className="mr-5 hover:text-gray-900">Find US</a>
        </nav>
        <button
          className="inline-flex items-center px-3 py-1 mt-4 space-x-2 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0"
          onClick={() => setToggle(!toggle)}
        >
          <p>Check Out</p>
          <BsCartFill />
        </button>
        <Offcanvas isOpen={toggle} setIsOpen={setToggle} />
      </div>
    </header>
  );
};

export default NavBar;

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-mds ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
        <h1 className="font-bold text-sm sm:text-x flax flex-wrap">
          <span className="text-slate-500">
            {" "}
            codingcleverly
            <span className="text-red-500"> Estate</span>
          </span>
        </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-centre ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
        </form>
        <ul className="flex gap-6">
            <Link to="/">
          <l1 className="hidden sm:inline text-slate-700 hover:underline">
            {" "}
            Home{" "}
          </l1>
          </Link>
          <Link to="/About" >
          <l1 className="hidden sm:inline text-slate-700 hover:underline">
            {" "}
            About{" "}
          </l1>
          </Link>
          <Link to="/sign-in"> 
          <l1 className=" text-slate-700 hover:underline"> Sing In </l1>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

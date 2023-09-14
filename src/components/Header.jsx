import React from "react";
import menu from "../assets/menu.svg";
import search from '../assets/search.svg';
import user from '../assets/user.svg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header" className="w-full py-4 bg-zinc-950 px-2">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={menu} className="text-2xl text-orange-400" />
          </Link>
          <Link
            to="/"
            className="logo text-2xl md:text-3xl font-bold tracking-wider"
          >
            Meme
            <span className="bg-[#ff9000] text-black rounded-md px-1 ml-[2px]">
              hub
            </span>
          </Link>
          <div className="user-action flex items-center md:w-[70%]">
            <div className="search hidden md:block w-[70%]">
              <input
                className="text-sm py-2 bg-transparent border px-8 border-gray-300 w-full rounded-lg"
                type="text"
                placeholder="search ...."
              />
            </div>
            <Link to="/" className="md:hidden">
            <img src={search} className="text-2xl text-orange-400" />
            </Link>
            <Link to="/upload" className="ml-auto">
            <img src={user} className="text-2xl text-orange-400" />
              {/* <i className="fas fa-user-circle text-2xl"></i> */}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

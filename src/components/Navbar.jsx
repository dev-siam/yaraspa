import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/yaraspa.png";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
  // Apply theme classes to the <html> element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); 
  }, [theme]);

  // Toggle theme
  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

 

  // Navigation links
  const links = (
    <ul className="menu flex-col md:flex-row text-black">
      <li className="">
        <NavLink to="/" className="hover:text-blue-500 dark:text-white">
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/a" className="hover:text-blue-500 dark:text-white">
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/b" className="hover:text-blue-500 dark:text-white">
          Home
        </NavLink>
      </li>
      
    </ul>
  );

  return (
    <nav className="mx-auto container flex justify-center relative">
      <div className="w-11/12 md:w-10/12 mx-auto py-1 px-3 md:px-6 absolute top-2 text-center rounded-3xl bg-white dark:border dark:border-gray-700 dark:bg-gray-800 shadow-lg transition-colors duration-300   flex justify-between items-center ">
        {/* Hamburger Menu */}
        {/* Dropdown for mobile */}
        <div className="dropdown lg:hidden">
          <button className="btn btn-ghost dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul className="dropdown-content z-50 menu p-2 shadow  bg-white rounded-box w-fit  dark:text-gray-200 dark:bg-gray-700 dark:shadow-gray-800">
            {links}
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              className="w-8 h-8 lg:w-10 lg:h-10 mr-1"
            />
            <p className="hidden sm:flex text-lg lg:text-2xl font-bold text-purple-600 dark:text-purple-400">
              Yaraspa
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex">{links}</div>

        {/* User Section */}
        <div className="flex items-center gap-2">
          <button className="hidden" onClick={themeToggle}>
            {theme === "light" ? (
              <MdDarkMode className="text-2xl text-gray-800 dark:text-gray-200" />
            ) : (
              <MdLightMode className="text-2xl text-gray-800 dark:text-gray-200" />
            )}
          </button>
          <NavLink
            to="/login"
            className="px-2 py-1 text-white rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../assets/yaraspa.png";


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 mt-10">
      <div className="w-11/12 md:w-10/12  lg:w-8/12 mx-auto justify-center items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Brand and Description */}
        <div className="grid gap-2">
          <div className="flex items-center gap-3">
            <Link className="flex items-center">
              <img
                src={Logo}
                alt="logo"
                className="w-8 h-8 lg:w-10 lg:h-10 mr-1"
              />
              <p className="flex text-2xl font-bold text-purple-600 dark:text-purple-400">
                Yaraspa
              </p>
            </Link>
          </div>
          <p className="text-sm leading-relaxed italic">
            Your trusted partner.
          </p>

          <div className="grid gap-1">
            <p className="text-sm leading-relaxed">
              <b>Phone:</b> (718) 687-9641
            </p>
            <p className="text-sm leading-relaxed">
              <b>Location:</b> Elmont, NY-11003
            </p>
            <p className="text-sm leading-relaxed">
              <b>Email:</b> yaraspa2024@gmail.com
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 rounded-full"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 rounded-full"
            >
              <FaSquareXTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 rounded-full"
            >
              <FaInstagramSquare className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 rounded-full"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:underline hover:text-purple-500 dark:hover:text-purple-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-purple-500 dark:hover:text-purple-400"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-purple-500 dark:hover:text-purple-400"
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-purple-500 dark:hover:text-purple-400"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-purple-500 dark:hover:text-purple-400"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
          <form className="grid space-y-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-3 py-2 text-gray-800 dark:text-gray-900 dark:bg-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg"
            />
            <button
              type="submit"
              className="px-3 py-2 text-white text-center  rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 mx-8 pt-4 text-center text-sm">
        Copyright © 2025. <b>Yaraspa</b> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

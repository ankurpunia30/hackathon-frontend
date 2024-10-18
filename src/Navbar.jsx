import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="w-full text-gray-700 bg-black shadow-md">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-5 font-medium text-gray-400 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-gray-400 select-none">
              Insight<span className="text-indigo-600">Link</span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-700">
            <Link
              to="/"
              className="mr-5 font-medium leading-6 text-gray-400 hover:text-white transition duration-300 transform hover:scale-105 relative"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </Link>
            <Link
              to="/features"
              className="mr-5 font-medium leading-6 text-gray-400 hover:text-white transition duration-300 transform hover:scale-105 relative"
            >
              Features
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </Link>
            <Link
              to="/chat"
              className="mr-5 font-medium leading-6 text-gray-400 hover:text-white transition duration-300 transform hover:scale-105 relative"
            >
              Create 
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </Link>
            <Link
              to="/about"
              className="mr-5 font-medium leading-6 text-gray-400 hover:text-white transition duration-300 transform hover:scale-105 relative"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </Link>
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <Link
            to="/signin"
            className="text-base font-medium leading-6 text-gray-400 whitespace-no-wrap transition duration-150 ease-in-out hover:text-white"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-screen bg-black text-white h-16 md:sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-5">
        <a href="#home" className="title-font font-medium text-white text-xl">
          Abdullah Azam
        </a>
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <i className="fas fa-times h-6 w-6"></i>
            ) : (
              <i className="fas fa-bars h-6 w-6"></i>
            )}
          </button>
        </div>
        <nav
          className={`md:flex md:items-center md:justify-center md:space-x-5 absolute md:relative bg-black md:bg-transparent w-full md:w-auto transition-transform duration-300 ${
            isOpen ? "top-16" : "-top-full"
          }`}
        >
          <a
            href="#about"
            className="block md:inline-block py-2 px-4 text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#skills"
            className="block md:inline-block py-2 px-4 text-white hover:bg-gray-700"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block md:inline-block py-2 px-4 text-white hover:bg-gray-700"
          >
            Projects
          </a>
          <a
            href="#services"
            className="block md:inline-block py-2 px-4 text-white hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block md:inline-block bg-[B3B4BD]-800 border-1 py-2 px-4 mt-4 md:mt-0 rounded text-base hover:bg-gray-700 text-blue-50"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
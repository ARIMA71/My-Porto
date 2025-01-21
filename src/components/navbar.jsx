import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 w-full p-4 shadow-md backdrop-blur-md z-50 hover:bg-blue-500 transition-colors duration-300">
      <div className="flex justify-between items-center container mx-auto px-2">
        <a href="#hero" className="text-2xl font-bold text-white hover:text-blue-700">Portfolio</a>
        <div className="flex space-x-6">
          <a href="#about" className="font-semibold nav-link hover:text-blue-700">About</a>
          <a href="#projects" className="font-semibold nav-link hover:text-blue-700">Projects</a>
          <a href="#contact" className="font-semibold nav-link hover:text-blue-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

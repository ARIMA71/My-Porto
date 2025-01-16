import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 w-full p-4 shadow-md backdrop-blur-md z-50 transition-colors duration-300">
      <div className="flex justify-between items-center container mx-auto px-6">
        <a href="#hero" className="text-2xl font-semibold text-white hover:text-blue-700">Portfolio</a>
        <div className="flex space-x-6">
          <a href="#hero" className="nav-link hover:text-blue-700">Home</a>
          <a href="#about" className="nav-link hover:text-blue-700">About</a>
          <a href="#projects" className="nav-link hover:text-blue-700">Projects</a>
          <a href="#contact" className="nav-link hover:text-blue-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

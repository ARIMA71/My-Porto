import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/project';
import Contact from './components/contact';

const App = () => {
  return (
    <div className="items-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;

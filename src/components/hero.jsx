import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">Hi, I'm Abel</h1>
      <p className="text-lg mb-6 max-w-lg text-center">
      I'm an informatics student with a passion for creating elegant web applications and user-friendly web applications. 
      I also actively participate in campus organizations and have strong leadership skills. 
      Explore my projects and learn more about me.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-white text-blue-800 rounded-md shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
      >
        View Projects
      </a>
    </section>
  );
};

export default Hero;

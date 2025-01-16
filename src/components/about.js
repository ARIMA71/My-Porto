import React from 'react';
import bgImage from '../assets/pake2.png';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center bg-gray-100 p-10 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 bg-blue-400 w-20 h-20 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 bg-red-600 w-36 h-36 rounded-full opacity-20 animate-bounce"></div>
      <div className="md:w-1/2 flex justify-center animate-slide-in-left relative z-10">
        <img
          src={bgImage}
          alt="About Me"
          className="rounded-lg shadow-lg w-4/6"
        />
      </div>
      <div className="md:w-1/2 px-6 animate-slide-in-right">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">About Me</h2>
        <p className="text-lg text-gray-600">
          I'm an informatics student with a passion for creating elegant web applications. I actively participate in campus organizations and have strong leadership skills.
        </p>
        <div className='mt-6'>
        <a
          href="https://drive.google.com/uc?export=download&id=1T6YmAoHfbFqjvhiblR1pdXQnjXeoJtn1"
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-white hover:text-blue-500 transition-colors duration-300"
          download
        >
          Download CV
        </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const Projects = () => {
  return (
    <section 
    id="projects" 
    className="min-h-screen bg-white py-10 p-10 relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center ">
        <div className="absolute top-10 right-10 bg-blue-400 w-20 h-20 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 bg-red-600 w-36 h-36 rounded-full opacity-20 animate-bounce"></div>
      </div>
      <h2 className="text-4xl font-bold text-center mb-6 pb-4 text-blue-800">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-6">
        <a 
            className="bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            href="https://github.com/ARIMA71"
            target="_blank"
            rel="noopener noreferrer">
            <h3 className="text-xl mb-2">Programing</h3>
            <p>the programming that I do is according to the tasks on campus or other needs</p>
            <img src={image1} alt="Project 1" className="p-5 w-auto h-auto rounded-lg" />
        </a>
        <a 
            className="bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            href="https://drive.google.com/drive/u/1/folders/1KdBfFbi-37k5e-xmkPCibWnrTRJSf1mm"
            target="_blank"
            rel="noopener noreferrer">
            <h3 className="text-xl mb-2">Design Graphic</h3>
            <p>I've done quite a bit such as feed design, posters, images, video editing and such.</p>
            <img src={image2} alt="Project 2" className="p-5 w-auto h-auto rounded-lg" />
        </a>
        <a
          className="bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          href="https://drive.google.com/drive/folders/154kAnkTsPOU7bhkpSA9LGW5P0_ChvMtw?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer">
          <h3 className="text-xl mb-2">Drawing</h3>
          <p>For drawing, I only do it as a hobby and side income.</p>
          <img src={image3} alt="Project 3" className="p-5 w-auto h-auto rounded-lg" />
        </a>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-white py-10">
    <h2 className="text-4xl font-bold text-center mb-6 text-blue-800">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-6">
        <a 
            className="bg-gradient-to-r from-blue-800 to-white p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            href="https://drive.google.com/drive/u/1/folders/1s7l32YevXGNug1d2avUc4rxWMeSZHmrO"
            target="_blank"
            rel="noopener noreferrer">
            <h3 className="text-xl mb-2">Project 1</h3>
            <p>Description of project 1.</p>
            <img src={image1} alt="Project 1" className="p-5 w-auto h-auto rounded-lg" />
        </a>
        <a 
            className="bg-gradient-to-r from-blue-800 to-white p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            href="https://drive.google.com/drive/u/1/folders/1s7l32YevXGNug1d2avUc4rxWMeSZHmrO"
            target="_blank"
            rel="noopener noreferrer">
            <h3 className="text-xl mb-2">Project 2</h3>
            <p>Description of project 2.</p>
            <img src={image2} alt="Project 2" className="p-5 w-auto h-auto rounded-lg" />
        </a>
        <a
          className="bg-gradient-to-r from-blue-800 to-white p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          href="https://drive.google.com/drive/u/1/folders/1s7l32YevXGNug1d2avUc4rxWMeSZHmrO"
          target="_blank"
          rel="noopener noreferrer">
          <h3 className="text-xl mb-2">Project 3</h3>
          <p>Description of project 3.</p>
          <img src={image3} alt="Project 3" className="p-5 w-auto h-auto rounded-lg" />
        </a>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image1p from '../assets/image1p.png';
import image1s from '../assets/image1s.png';

const Projects = () => {
  const [segment, setSegment] = useState("programming");

  const toggleSegment = (selectedSegment) => {
    setSegment((prevSegment) => (prevSegment === selectedSegment ? null : selectedSegment));
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-100 py-16 px-10 text-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
        Projects
      </h2>

      {/* Programming Section */}
      <button
        onClick={() => toggleSegment('programming')}
        className="text-3xl font-bold mb-6 text-blue-500 hover:underline hover:text-blue-800 mr-10"
      >
        Programming
      </button>
      {segment === 'programming' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg text-blue-500 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={image1}
                alt="Ask' AI"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Ask' AI</h4>
                <p className="text-sm mb-4">
                  AI chatbot websites that allow users to ask AI questions and additional file input features, especially identifiable CSV files.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">Golang</span>
                  <span className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">React JS</span>
                  <span className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">Tailwind CSS</span>
                  <span className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">Huggingface</span>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/ARIMA71/Ask-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline hover:font-bold"
                  >
                    Code
                  </a>
                  <a
                    href="https://arima71.github.io/Ask-AI/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-800"
                  >
                    Deploy
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg text-blue-500 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={image1s}
                alt="Student Portal"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Web Student Portal</h4>
                <p className="text-sm mb-4">
                  Websites for managing student data, allowing teachers to add, edit, or delete student records.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">React JS</span>
                  <span className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">CSS</span>
                  <span className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">Material UI</span>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/ARIMA71/Student-Portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline hover:font-bold"
                  >
                    Code
                  </a>
                  <a
                    href="https://arima71.github.io/Student-Portal/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-800"
                  >
                    Deploy
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg text-blue-500 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={image1p}
                alt="Pokedex"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">PokeDex</h4>
                <p className="text-sm mb-4">
                  A simple website that allows users to search for Pokémon data by name or ID.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">HTML</span>
                  <span className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">Tailwind CSS</span>
                  <span className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">JavaScript</span>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/ARIMA71/Poke-List"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline hover:font-bold"
                  >
                    Code
                  </a>
                  <a
                    href="https://arima71.github.io/Poke-List/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-800"
                  >
                    Deploy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <a 
            href="https://github.com/ARIMA71"
            target="-blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-800">
              View More
            </a>
          </div>
        </div>
      )}

      {/* Graphic Design Section */}
      <button
        onClick={() => toggleSegment('graphicDesign')}
        className="text-3xl font-bold mb-6 text-red-500 mr-10 hover:underline hover:text-red-800"
      >
        Graphic Design
      </button>
      {segment === 'graphicDesign' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg text-red-500 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={image2}
                alt="Thumbnail"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Youtube Video Thumbnail</h4>
                <p className="text-sm mb-4">
                  Create a YouTube thumbnail design for the 28th batch of SMAN 4 Sidoarjo video
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-500 text-red-200 text-xs font-medium py-1 px-2 rounded">
                    Photoshop
                  </span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg text-red-500 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={image2}
                alt="Youtube Video"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Produce Graduation Flashmob Video</h4>
                <p className="text-sm mb-4">
                Producing a video for the graduation of the 28th batch of SMAN 4 Sidoarjo, 
                with the concept of flashmob as a memories.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-500 text-white text-xs font-medium py-1 px-2 rounded">
                    Premiere Pro
                  </span>
                  <span className="bg-red-500 text-white text-xs font-medium py-1 px-2 rounded">
                    Photoshop
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://youtu.be/AUEZvHavQ90?si=vYGtXf2Ag3uVMrD8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-400 hover:underline hover:font-bold"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <a 
            href="https://drive.google.com/drive/folders/1KdBfFbi-37k5e-xmkPCibWnrTRJSf1mm?usp=drive_link"
            className="bg-red-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-red-800"
            target="-blank"
            rel="noopener noreferrer">
              View More
            </a>
          </div>
        </div>
      )}

      {/* Drawing Section */}
      <button
        onClick={() => toggleSegment('drawing')}
        className="text-3xl font-bold mb-6 text-green-500 hover:underline hover:text-green-800"
      >
        Drawing
      </button>
      {segment === 'drawing' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg text-green-500 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={image3}
                alt="legend of Runetera"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Drawing Commision</h4>
                <p className="text-sm mb-4">
                Producing character design images with special requests from some friends. 
                Some images usually take me 2 days to complete..
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-500 text-white text-xs font-medium py-1 px-2 rounded">
                    Clip Studio Paint
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <a 
            href="https://drive.google.com/drive/folders/154kAnkTsPOU7bhkpSA9LGW5P0_ChvMtw?usp=drive_link"
            className="bg-green-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-green-800"
            target="_blank"
            rel="noopener noreferrer">
              View More
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

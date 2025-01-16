import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import contactImage from '../assets/port.JPG';

const Contact = () => {
  return (
    <section id="contact" className="text-white min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 py-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-6">Contact</h2>
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 text-center md:text-left">
          <h3 className="text-2xl mb-4">Get in Touch</h3>
          <p className="mb-6 text-lg">You can reach out to me through the following social media platforms or via email:</p>
          <ul className="list-none">
            <li className="mb-6 text-2xl">
              <a href="https://www.linkedin.com/in/abel-bima-26a82a25b/" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="inline-block" />
              </a>
            </li>
            <li className="mb-6 text-2xl">
              <a href="https://github.com/ARIMA71" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FaGithub className="inline-block" />
              </a>
            </li>
            <li className="mb-6 text-2xl">
              <a href="https://instagram.com/abel_bima" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="inline-block" />
              </a>
            </li>
            <li className="mb-6 text-2xl">
              <a href="mailto:abelbima4713@gmail.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <SiGmail className="inline-block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/5">
          <img src={contactImage} alt="Contact" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

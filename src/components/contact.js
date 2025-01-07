import React from 'react';
import contactImage from '../assets/port.JPG';

const Contact = () => {
  return (
    <section id="contact" className="text-black min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-800">Contact</h2>
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 text-center md:text-left">
          <h3 className="text-xl mb-4">Get in Touch</h3>
          <p className="mb-4">You can reach out to me through the following social media platforms or via email:</p>
          <ul className="list-none text-black">
            <li className="mb-2"><a href="https://www.linkedin.com/in/abel-bima-26a82a25b/" className="hover:text-blue-700" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li className="mb-2"><a href="https://github.com/ARIMA71" className="hover:text-blue-700" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li className="mb-2"><a href="https://instagram.com/abel_bima" className="hover:text-blue-700" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li className="mb-2"><a href="mailto:abelbima4713@gmail.com" className="hover:text-blue-700" target="_blank" rel="noopener noreferrer">Mail</a></li>
          </ul>
        </div>
        <div className="w-full md:w-2/5 ml-16">
          <img src={contactImage} alt="Contact" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

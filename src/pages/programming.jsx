import React from 'react';

const Programming = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 text-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">Programming Projects</h2>
      <p className="text-lg text-center max-w-2xl mx-auto">
        This page showcases programming projects with descriptions and technologies used.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto mt-10">
        {/* Detail proyek */}
        <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl">
          <h3 className="text-xl font-semibold text-blue-600">Project 1</h3>
          <p>A React web app for managing tasks.</p>
          <p className="text-sm text-gray-500 mt-1">Tech: React, Firebase</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl">
          <h3 className="text-xl font-semibold text-blue-600">Project 2</h3>
          <p>A Python script for data analysis.</p>
          <p className="text-sm text-gray-500 mt-1">Tech: Python, pandas</p>
        </div>
      </div>
    </div>
  );
};

export default Programming;

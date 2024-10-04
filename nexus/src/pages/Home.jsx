// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <model-viewer
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="/assets/earth_globe.glb" // Ensure this path is correct
        ar
        shadow-intensity="1"
        // auto-rotate
        style={{ width: '100%', height: '800px' }} 
        camera-controls
        touch-action="pan-y"
        className="w-screen h-screen mb-8" // Full width and height
      ></model-viewer>
    </div>
  );
};

export default Home;
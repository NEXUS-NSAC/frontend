import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative p-8">
      {/* <h1 className="text-2xl font-bold mb-4">Home Page</h1> */}
      <div className="relative">
        <model-viewer
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
          src="/assets/earth_globe.glb" // Ensure this path is correct
          ar
          shadow-intensity="1"
          auto-rotate
          style={{ width: '100%', height: '800px' }} 
          // camera-controls
          touch-action="pan-y"
          className="w-full h-full"
        ></model-viewer>

        {/* Blur Layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 blur-lg z-5"></div>

        {/* Text Layer */}
              <p className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10">
          <span>Click to view the Dashboard</span>
          <Link to="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="button">
            Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
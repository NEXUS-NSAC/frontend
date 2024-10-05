import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeElements from '../components/HomeElements';

const Home = () => {
  const [values, setValues] = useState({
    temperature: '',
    uvIndex: '',
    seaLevel: '',
    airQuality: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return (
    <div className="relative p-8 text-center raleway-variable min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to Earth Dashboard</h1>
      <div className="relative min-h-screen">
        <div className='w-screen h-screen'>
          {/* dont remove or uncomment this part */}
          {/* <model-viewer
            alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
            src="/assets/earth_globe.glb" // Ensure this path is correct
            ar
            shadow-intensity="1"
            auto-rotate
            style={{ width: '100%', height: '800px' }} 
            // camera-controls
            touch-action="pan-y"
            className="w-full h-full"
          ></model-viewer> */}
        </div>

        {/* Blur Layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 blur-lg z-10"></div>
        
        {/* Text Layer */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-20 p-4">
          <h2 className="text-4xl font-bold mb-4">What do you want to simulate?</h2>
          <p className="text-lg mb-8">Select the category and enter the values to simulate the Earth</p>
      
          <div className='grid gap-3 grid-cols-1 lg:grid-cols-4 mb-8 w-full'>
            <HomeElements src='./assets/human.png' name="Human" value="100"/>
            <HomeElements src='./assets/animals.jpeg' name="Animals"value="70" />
            <HomeElements src='./assets/tree.jpeg' name="Tree" value="60"/>
            <HomeElements src='./assets/wave.jpeg' name="Ocean" value="30"/>
          </div>
          <div className='grid gap-3 grid-cols-1 lg:grid-cols-4 mb-8 w-full'>
            <div className="flex flex-col items-center">
              <input
                type="number"
                name="temperature"
                className="p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter value"
                value={values.temperature}
                onChange={handleChange}
              />
              <span className="mt-2">Temperature</span>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="number"
                name="uvIndex"
                className="p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter value"
                value={values.uvIndex}
                onChange={handleChange}
              />
              <span className="mt-2">UV Index</span>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="number"
                name="seaLevel"
                className="p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter value"
                value={values.seaLevel}
                onChange={handleChange}
              />
              <span className="mt-2">Sea Level</span>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="number"
                name="airQuality"
                className="p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter value"
                value={values.airQuality}
                onChange={handleChange}
              />
              <span className="mt-2">Air Quality</span>
            </div>
          </div>
          <span className="mt-4">Click to view the Simulate</span>
          <Link
            to={`/dashboard?temperature=${values.temperature}&uvIndex=${values.uvIndex}&seaLevel=${values.seaLevel}&airQuality=${values.airQuality}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            type="button"
          >
            Simulate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
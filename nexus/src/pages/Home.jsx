import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeElements from "../components/HomeElements";
import CountUp from "react-countup";
import home from "../data/homePage.json";

const Home = () => {
  const getColor = (value) => {
    if (value > 75) return "#22c55e"; // green-500
    if (value > 65) return "#eab308"; // yellow-500
    if (value > 55) return "#f97316"; // orange-500
    if (value > 45) return "#ef4444"; // red-500
    return "#b91c1c"; // red-700
  };

  const months = ["JAN 2022", "FEB 2022", "MAR 2022", "APR 2022", "MAY 2022", "JUN 2022", "JUL 2022", "AUG 2022", "SEP 2022", "OCT 2022", "NOV 2022", "DEC 2022"];

  const people = {
    name: "People",
    value: 99,
  };

  const animals = {
    name: "Animal Life",
    value: 55,
  };

  const tree = {
    name: "Tree",
    value: 70,
  };

  const temperature = {
    name: "Temperature",
    value: 65,
  };

  const uvIndex = {
    name: "UV Index",
    value: 55,
  };

  const seaLevel = {
    name: "Sea Level",
    value: 45,
  };

  const airQuality = {
    name: "Air Quality",
    value: 35,
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative text-center poppins-bold min-h-screen">
      <div className="flex flex-col h-screen -mt-14">
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 pb-16">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl poppins-bold mt-20 raleway-variable sm:text-7xl sm:text-left">{home.mainTitle}</h1>
          </div>
          <div className="sm:flex justify-center items-center">
            <p className="poppins-regular text-lg leading-normal sm:text-lg sm:mt-28 sm:text-left">{home.titleContent}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-4">
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9 9 9-9" />
            </svg>
          </div>
          <p className="mt-2 text-white">Scroll Down</p>
        </div>
      </div>

      <div className="my-16 poppins-regular text-lg ">{home.subTitle}</div>

      <div className="relative min-h-screen">
        <div className="relative w-full h-full flex flex-col items-center justify-center text-white p-4">
          <div className="flex flex-col md:flex-row justify-between items-center w-full my-1">
            <h2 className="text-4xl font-bold mb-2 md:mb-0">Earth Right Now!</h2>
            <h2 className="bg-gray-700 hover:bg-purple-750 text-white font-bold py-2 px-4 rounded">OCT 2022</h2>
          </div>
          {/* small gap */}
          <div className="flex justify-between items-center h-10 w-full"></div>

          <div className="grid gap-3 grid-cols-1 lg:grid-cols-4 mb-8 w-full">
            {home.Elements.map((element, index) => {
              // Find the highest rating entry where the key is less than or equal to element.value
              const ratingEntry = element.rating
                .filter((rating) => {
                  const key = parseInt(Object.keys(rating)[0]); // Get the percentage key as an integer
                  return key <= element.value; // Check if the key is less than or equal to the element value
                })
                .pop(); // Get the last entry which will have the highest percentage

              // Fallback to '0' rating if no match is found
              const ratingDetails = ratingEntry ? ratingEntry[Object.keys(ratingEntry)[0]] : element.rating.find((rating) => Object.keys(rating)[0] === "0")[0];

              return (
                <HomeElements
                  key={index}
                  name={element.name}
                  value={element.value} // Pass the percentage value
                  description={ratingDetails.description} // Pass the corresponding description
                  svg={element.svg} // Pass the svg or path
                  suffix={element.suffix} // Pass the suffix
                />
              );
            })}

          </div>

          {/* small gap */}
          <div className="flex justify-between items-center h-20 w-full"></div>

          {/* second part */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full my-5">
            <h2 className="text-4xl font-bold mb-1">Earth Then and Future!</h2>
            <select className="bg-gray-700 hover:bg-purple-750 text-white font-bold py-2 px-2 rounded">
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* small gap */}
          <div className="flex justify-between items-center h-10 w-full"></div>

          <div className="grid gap-3 grid-cols-1 lg:grid-cols-4 mb-8 w-full">
            {home.Elements.map((element, index) => {
              // Find the highest rating entry where the key is less than or equal to element.value
              const ratingEntry = element.rating
                .filter((rating) => {
                  const key = parseInt(Object.keys(rating)[0]); // Get the percentage key as an integer
                  return key <= element.value; // Check if the key is less than or equal to the element value
                })
                .pop(); // Get the last entry which will have the highest percentage

              // Fallback to '0' rating if no match is found
              const ratingDetails = ratingEntry ? ratingEntry[Object.keys(ratingEntry)[0]] : element.rating.find((rating) => Object.keys(rating)[0] === "0")[0];

              return (
                <HomeElements
                  key={index}
                  name={element.name}
                  value={element.value} // Pass the percentage value
                  description={ratingDetails.description} // Pass the corresponding description
                  svg={element.svg} // Pass the svg or path
                  suffix={element.suffix} // Pass the suffix
                />
              );
            })}
          </div>
          {/* <span className="mt-4">Click to view the Simulate</span>
          <Link to={`/Simulator?temperature=${values.temperature}&uvIndex=${values.uvIndex}&seaLevel=${values.seaLevel}&airQuality=${values.airQuality}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="button">
            Simulate
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

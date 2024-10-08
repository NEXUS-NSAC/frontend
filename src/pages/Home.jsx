import React, { useState, useEffect } from "react";
import HomeElements from "../components/HomeElements";
import home from "../data/homePage.json";

const Home = () => {
  const [selectedMonth, setSelectedMonth] = useState("");


  useEffect(() => {
    window.location.href = "https://frontend-two-steel-50.vercel.app/";
  }, []);


  console.log("redirecting to the new site");
  
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

    const fetchData = async () => {
    try {
      const response = await fetch('/api/generate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();

  // console.log(selectedMonth);

  // useEffect(() => {
  //   if (selectedMonth) {
  //     // Make a backend request to fetch data for the selected month
  //     axios
  //       .get(`/api/data?month=${selectedMonth}`)
  //       .then((response) => {
  //         setElements(response.data.elements);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }
  // }, [selectedMonth]);

  return (
    <div className="relative text-center poppins-bold min-h-screen">
      <div className="flex flex-col h-screen -mt-14">
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 pb-16">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl poppins-bold mt-20 raleway-variable sm:text-7xl sm:text-left">{home.mainTitle}</h1>
          </div>
          <div className="sm:flex justify-center items-center">
            <p className="poppins-regular text-lg leading-normal  sm:text-lg sm:mt-28 sm:text-left">{home.titleContent}</p>
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
            <h2 className="bg-gray-700 hover:bg-purple-750 text-white font-bold py-2 px-4 rounded">June 2024</h2>
          </div>
          {/* small gap */}
          <div className="flex justify-between items-center h-10 w-full"></div>

          <div className="grid gap-3 grid-cols-1 lg:grid-cols-4 mb-8 w-full">
            {home.Elements.map((element, index) => {
              let description = "";

              // Determine the description based on value ranges
              if (element.value > 80) {
                const ratingEntry = element.rating.find((rating) => rating.hasOwnProperty("complimentary"));
                description = ratingEntry ? ratingEntry["complimentary"].description : "No description available.";
              } else if (element.value > 60 && element.value <= 80) {
                const ratingEntry = element.rating.find((rating) => rating.hasOwnProperty("Moderate to complimentary"));
                description = ratingEntry ? ratingEntry["Moderate to complimentary"].description : "No description available.";
              } else if (element.value > 40 && element.value <= 60) {
                const ratingEntry = element.rating.find((rating) => rating.hasOwnProperty("Moderate"));
                description = ratingEntry ? ratingEntry["Moderate"].description : "No description available.";
              } else if (element.value > 20 && element.value <= 40) {
                const ratingEntry = element.rating.find((rating) => rating.hasOwnProperty("Critical to Moderate"));
                description = ratingEntry ? ratingEntry["Critical to Moderate"].description : "No description available.";
              } else {
                const ratingEntry = element.rating.find((rating) => rating.hasOwnProperty("Critical"));
                description = ratingEntry ? ratingEntry["Critical"].description : "No description available.";
              }

              return (
                <HomeElements
                  key={index}
                  name={element.name}
                  value={element.value}
                  description={description}
                  svg={element.svg} // If you have SVG data
                  suffix={element.suffix}
                />
              );
            })}
          </div>

          {/* small gap */}
          <div className="flex justify-between items-center h-20 w-full"></div>

          {/* second part */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full my-5">
            <h2 className="text-4xl font-bold mb-1">Earth Then and Future!</h2>
            <input type="month" className="bg-gray-700 hover:bg-purple-750 text-white font-bold py-2 px-4 rounded" min="2000-01" max="2090-12" value={selectedMonth} onChange={handleMonthChange} />
          </div>

          {/* small gap */}
          <div className="flex justify-between items-center h-10 w-full"></div>

          <div className="grid gap-3 grid-cols-1 lg:grid-cols-4 mb-8 w-full">
            {home.Elements.map((element, index) => {
              let description = "";

              // Determine the description based on value ranges
              if (element.value > 80) {
                const ratingEntry = element.rating.find((rating) => rating.hasOwnProperty("complimentary"));
                description = ratingEntry ? ratingEntry["complimentary"].description : "No description available.";
              } else if (element.value > 60 && element.value <= 80) {
                const ratingEntry = element.rating.find((rating) => rating.hasOwnProperty("Moderate to complimentary"));
                description = ratingEntry ? ratingEntry["Moderate to complimentary"].description : "No description available.";
              } else if (element.value > 40 && element.value <= 60) {
                const ratingEntry = element.rating.find((rating) => rating.hasOwnProperty("Moderate"));
                description = ratingEntry ? ratingEntry["Moderate"].description : "No description available.";
              } else if (element.value > 20 && element.value <= 40) {
                const ratingEntry = element.rating.find((rating) => rating.hasOwnProperty("Critical to Moderate"));
                description = ratingEntry ? ratingEntry["Critical to Moderate"].description : "No description available.";
              } else {
                const ratingEntry = element.rating.find((rating) => rating.hasOwnProperty("Critical"));
                description = ratingEntry ? ratingEntry["Critical"].description : "No description available.";
              }

              return (
                <HomeElements
                  key={index}
                  name={element.name}
                  value={element.value}
                  description={description}
                  svg={element.svg} 
                  suffix={element.suffix}
                  month={selectedMonth}
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

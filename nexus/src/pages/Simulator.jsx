import React, { useState, useEffect } from "react";
import SimElement from "../components/SimElements";
import SimImage from "../components/simImage";
import simData from "../data/sim.json"; // Adjust the path as needed

const Simulator = () => {
  const [affected, setAffected] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [elements, setElements] = useState({
    AirQualityIndex: 0,
    GlacierMassBalance: 0,
    Precipitation: 0,
    GreenhouseGasesCO2COCH4: 0,
    AtmosphericTemperature: 0,
    SolarRadiationAbsorption: 0,
    ErosionRates: 0,
    SnowCoverDuration: 0,
    SeaTemperatureSST: 0,
    WaterQualityIndicatorsPH: 0,
    SoilCompositionAndQuality: 0,
    Disasters: 0,
    EnergyWasteAndSustainableEnergy: 0,
    BiodiversityIndices: 0,
    ForestCover: 0,
  });
  const AffectedTo = ["Human Life", "Animal Life", "Agriculture", "Aquatic Life"];
  // const query = new URLSearchParams(useLocation().search);

  const value = 80;

  useEffect(() => {
    // Set all elements to the initial value when the component mounts
    const initialElements = Object.keys(elements).reduce((acc, key) => {
      acc[key] = value;
      return acc;
    }, {});
    setElements(initialElements);
  }, []);

  const getColor = (value) => {
    if (value > 75) return "#22c55e";
    if (value > 65) return "#eab308";
    if (value > 55) return "#f97316";
    if (value > 45) return "#ef4444";
    return "#b91c1c";
  };

  const color = getColor(value);

  const handleChange = (event) => {
    setAffected(event.target.value); // Update the state with the selected value
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSimulate = () => {
    if (selectedMonth) {
      // Make a backend request to fetch data for the selected month
      fetch(`/api/data?month=${selectedMonth}`)
        .then((response) => response.json())
        .then((data) => {
          setElements(data.elements);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const handleSliderChange = (event, key) => {
    setElements({
      ...elements,
      [key]: parseInt(event.target.value, 10),
    });
  };

  return (
    <div className="relative p-8 text-center poppins-bold min-h-screen ">
      <div>
        <div className="text-left">
          <h1 className="text-3xl font-bold raleway-variable">Shape Earth’s Future, See the Impact</h1>
          <h3 className="poppins-regular">NEXUS 1.0 SIMULATION DASHBOARD</h3>
          <p className="text-sm my-3 poppins-regular">The NEXUS 1.0 SIMULATION DASHBOARD is a tool that lets you explore how different environmental factors interact and affect the Earth's systems. It provides real-time data on variables like temperature, UV index, and air quality. You can also explore past data or predict future conditions based on these variables. Additionally, you can simulate how changes in one factor—like increasing temperature—might impact other areas, such as sea level or biodiversity, and see how they connect to the Earth’s spheres (geosphere, biosphere, hydrosphere, atmosphere, cryosphere).</p>
        </div>
        <div className="text-left my-5">
          <h1 className="text-3xl font-bold raleway-variable">How to Use the Simulation Dashboard</h1>
          <p className="text-sm my-3 poppins-regular">To use the NEXUS 1.0 SIMULATION DASHBOARD, first select the environmental variable you’re interested in (e.g., temperature or sea level) and the time frame you want to explore. You can either view current data, look at past trends, or simulate future scenarios. For example, if you raise the temperature in your simulation, you might see the sea level rise and the UV index change, showing how interconnected the systems are. You can also learn more about each variable by diving deeper into the information provided in the dashboard. This interactive tool allows you to see how small changes in one area can impact the entire planet.</p>
        </div>
      </div>

      <div className="relative min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center my-5">
          <button className="text-3xl text-white font-bold py-2 px-4 rounded col-span-1 md:col-span-1">Simulator</button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2 md:col-span-2">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-bold">Affected To</p>
              <select
                className="bg-gray-700 hover:bg-gray-750 text-white w-full font-bold py-2 px-2 rounded"
                value={affected} // Control the value of the select
                onChange={handleChange} // Set the onChange handler
              >
                <option value="">Select Option</option>
                {AffectedTo.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="text-lg font-bold">Select Month</p>
              <input type="month" className="bg-gray-700 hover:bg-gray-750 text-white w-full font-bold py-2 px-2 rounded" min="2020-01" max="2023-12" value={selectedMonth} onChange={handleMonthChange} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="sm:col-span-1">
            <div className="bg-gray-800 p-4 rounded-lg">
              <SimImage affected={affected} value={value} color={color} suffix="%" />
            </div>
          </div>

          <div className="md:col-span-4">
            <SimElement AirQualityIndex={elements.AirQualityIndex} GlacierMassBalance={elements.GlacierMassBalance} Precipitation={elements.Precipitation} GreenhouseGasesCO2COCH4={elements.GreenhouseGasesCO2COCH4} AtmosphericTemperature={elements.AtmosphericTemperature} SolarRadiationAbsorption={elements.SolarRadiationAbsorption} ErosionRates={elements.ErosionRates} SnowCoverDuration={elements.SnowCoverDuration} SeaTemperatureSST={elements.SeaTemperatureSST} WaterQualityIndicatorsPH={elements.WaterQualityIndicatorsPH} SoilCompositionAndQuality={elements.SoilCompositionAndQuality} Disasters={elements.Disasters} EnergyWasteAndSustainableEnergy={elements.EnergyWasteAndSustainableEnergy} BiodiversityIndices={elements.BiodiversityIndices} ForestCover={elements.ForestCover} />
          </div>
        </div>

        <hr className="my-10"/>

        <div className="grid grid-cols-1 md:grid-cols-9 gap-2 mt-20">
          {Object.keys(elements).map((key, index) => (
            <div key={index} className="flex flex-col items-center p-2 border border-gray-700 rounded-lg">
              <label className="text-xs font-bold mb-2 text-center break-words">{simData.data[key].label}</label>
              <div className="flex-grow"></div> {/* Spacer to push the slider to the bottom */}
              <input type="range" min="0" max="100" value={elements[key]} onChange={(event) => handleSliderChange(event, key)} className="slider-vertical" style={{ writingMode: "bt-lr", WebkitAppearance: "slider-vertical" }} />
              <span className="mt-2">{elements[key]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Simulator;
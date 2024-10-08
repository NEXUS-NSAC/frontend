import React, { useState, useEffect } from "react";
import SimElement from "../components/SimElements";
import SimImage from "../components/SimImage";
import Sim from "../data/simPage.json";

const Simulator = () => {
  const [affected, setAffected] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [error, setError] = useState("")
  const [elements, setElements] = useState({
    airQuality: { label: "Air Quality Index", value: 59, suffix: "", range: 100, details: "..." },
    glacierMassBalance: { label: "Glacier Mass Balance", value: 44, suffix: "", range: 100, details: "..." },
    precipitation: {
      label: "Precipitation",
      value: 54,
      suffix: "",
      range: 100,
      details: "Precipitation refers to any form of water, liquid or solid, that falls from the atmosphere to the Earth's surface. This includes rain, snow, sleet, and hail. It plays a crucial role in the Earth's water cycle, replenishing freshwater supplies and supporting ecosystems, agriculture, and human needs. The amount and frequency of precipitation vary across regions and are influenced by factors such as geography, atmospheric conditions, and climate patterns. Understanding precipitation trends is vital for managing water resources, predicting weather patterns, and assessing the impacts of climate change on droughts and floods.",
    },

    greenhouseGases: {
      label: "Greenhouse Gases (CO2, CO, CH4)",
      value: 80,
      suffix: "",
      range: 50,
      details: "Greenhouse gases (GHGs), including carbon dioxide (CO2), carbon monoxide (CO), and methane (CH4), are atmospheric gases that trap heat from the sun, contributing to the warming of the Earth’s surface—a phenomenon known as the greenhouse effect. CO2 is primarily released from the burning of fossil fuels and deforestation, while CO results from incomplete combustion processes. Methane, a potent greenhouse gas, is released during activities like livestock farming, oil and gas production, and the decomposition of organic waste. These gases are major drivers of climate change, as they increase the Earth's average temperature, disrupt weather patterns, and intensify extreme events such as heatwaves and storms. Reducing greenhouse gas emissions is crucial for mitigating global warming and achieving climate stability.",
    },
    atmosphericTemperature: {
      label: "Atmospheric Temperature",
      value: 74,
      suffix: "",
      range: 100,
      details: "Atmospheric temperature refers to the measure of the warmth or coldness of the air in Earth's atmosphere. It is a key variable that influences weather patterns, climate systems, and life on the planet. Atmospheric temperature is determined by factors such as solar radiation, greenhouse gas concentrations, altitude, and geographical location. Changes in atmospheric temperature, especially the recent global warming trend, are largely driven by human activities that increase greenhouse gases like CO2 and CH4. Monitoring atmospheric temperature is critical for understanding climate change, forecasting weather events, and assessing its impacts on ecosystems, agriculture, and human health.",
    },
    solarRadiationAbsorption: {
      label: "Solar Radiation Absorption",
      value: 11,
      suffix: "",
      range: 100,
      details: "Solar radiation absorption refers to the process by which the Earth’s surface, atmosphere, and oceans absorb energy from the sun. This absorbed energy is crucial for maintaining the planet’s climate and supporting life, as it drives processes such as photosynthesis, weather systems, and the water cycle. Different surfaces absorb solar radiation at varying levels, with darker surfaces like forests and oceans absorbing more, while lighter surfaces like ice and snow reflect more. The amount of solar radiation absorbed is also influenced by factors like atmospheric composition, including the presence of greenhouse gases and aerosols. Understanding solar radiation absorption is essential for studying climate change, as imbalances can lead to global warming and shifts in weather patterns.",
    },
    erosionRates: {
      label: "Erosion Rates",
      value: 33,
      suffix: "",
      range: 100,
      details: "Erosion rates refer to the speed at which soil, rock, or sediment is worn away from the Earth's surface due to natural forces such as wind, water, ice, or human activities. Factors like rainfall, vegetation cover, land use, and soil composition influence how quickly erosion occurs in a given area. High erosion rates can lead to loss of fertile soil, reduced agricultural productivity, and degradation of ecosystems. Human activities, such as deforestation, urbanization, and poor land management, often accelerate erosion, contributing to issues like desertification and sedimentation in rivers and oceans. Monitoring and managing erosion rates is critical for environmental sustainability and land conservation.",
    },
    snowCoverDuration: {
      label: "Snow Cover Duration",
      value: 55,
      suffix: "",
      range: 100,
      details: "Snow cover duration refers to the length of time that a specific area is covered by snow during a year. It is an important factor in regulating local climate, water resources, and ecosystems, as snow reflects sunlight (albedo effect), helping to cool the Earth's surface. The duration of snow cover varies depending on geographic location, altitude, and climate conditions. Changes in snow cover duration, particularly reductions due to rising atmospheric temperatures, can disrupt water availability for regions that rely on snowmelt and affect ecosystems that depend on consistent snow cover. Monitoring snow cover duration is vital for understanding the impacts of climate change, particularly in polar and mountainous regions.",
    },
    seaTemperatureSST: {
      label: "Sea Temperature (SST)",
      value: 33,
      suffix: "",
      range: 100,
      details: "Sea Surface Temperature (SST) refers to the temperature of the upper layer of the ocean, typically measured at a depth of about 1 meter. It is a crucial parameter in understanding ocean dynamics, climate patterns, and marine ecosystems. SST influences atmospheric conditions, including weather systems and hurricane development, as warm waters can enhance storm intensity. Additionally, SST plays a significant role in the global carbon cycle, as warmer oceans can absorb less carbon dioxide and affect oceanic biological productivity. Monitoring SST is essential for climate research, providing insights into phenomena such as El Niño and La Niña, which have widespread implications for global weather and climate systems.",
    },
    waterQualityIndicators: {
      label: "Water Quality Indicators (pH)",
      value: 22,
      suffix: "",
      range: 100,
      details: "Water quality indicators, such as pH, are essential measurements that reflect the health and suitability of water for various uses, including drinking, recreation, and supporting aquatic life. The pH level indicates the acidity or alkalinity of water, with a scale ranging from 0 to 14; values below 7 denote acidity, while values above 7 indicate alkalinity. Maintaining an appropriate pH is crucial for the survival of aquatic organisms, as extreme pH levels can be harmful to fish and other wildlife. Changes in water pH can result from natural processes, such as rainfall and mineral runoff, as well as human activities, including pollution and industrial discharges. Monitoring water quality indicators, including pH, is vital for managing water resources, protecting ecosystems, and ensuring public health.",
    },
    soilCompositionAndQuality: {
      label: "Soil Composition and Quality",
      value: 43,
      suffix: "",
      range: 100,
      details: "Soil composition and quality** refer to the physical, chemical, and biological characteristics of soil that determine its ability to support plant growth and sustain ecosystems. Soil is composed of mineral particles, organic matter, water, and air, and its composition can vary significantly based on factors such as location, climate, and land use. High-quality soil is rich in nutrients, has good structure for water retention and drainage, and supports a diverse range of microorganisms that contribute to nutrient cycling. Conversely, degraded soil may suffer from erosion, compaction, or contamination, negatively impacting agricultural productivity and ecosystem health. Understanding soil composition and quality is essential for effective land management, sustainable agriculture, and mitigating the impacts of environmental changes.",
    },
    disasters: {
      label: "Disasters",
      value: 87,
      suffix: "",
      range: 100,
      details: "Disasters refer to significant, often sudden events that cause widespread disruption, destruction, and harm to communities, ecosystems, and economies. They can be natural, such as earthquakes, floods, hurricanes, and wildfires, or human-made, including industrial accidents and environmental degradation. The impacts of disasters can vary widely, affecting infrastructure, public health, and livelihoods, and often leading to long-term recovery challenges. Climate change is increasingly influencing the frequency and intensity of natural disasters, prompting the need for enhanced preparedness, risk assessment, and mitigation strategies. Understanding the causes and consequences of disasters is critical for developing effective response plans and fostering resilience in vulnerable communities.",
    },
    forestCover: {
      label: "Forest Cover",
      value: 23,
      suffix: "",
      range: 100,
      details: "Forest cover refers to the extent of land area that is covered by forests, which are ecosystems characterized by densely packed trees and other vegetation. Forests play a vital role in regulating the Earth's climate by acting as carbon sinks, absorbing carbon dioxide from the atmosphere and helping mitigate climate change. They also provide numerous ecological benefits, including habitat for diverse wildlife, stabilization of soil to prevent erosion, and protection of watersheds to maintain water quality. Changes in forest cover, often driven by deforestation, urbanization, and land conversion for agriculture, can have profound impacts on biodiversity, local climates, and carbon storage. Monitoring forest cover is essential for sustainable land management and for addressing environmental challenges such as habitat loss and climate change.",
    },
    energyWasteAndSustainableEnergy: {
      label: "Energy Waste & Sustainable Energy",
      value: 9,
      suffix: "",
      range: 100,
      details: "Energy waste refers to the unnecessary consumption of energy that occurs when energy is not used efficiently or effectively, leading to excess energy use and higher costs. This waste can arise from outdated technologies, inefficient appliances, poor insulation in buildings, and unnecessary energy consumption in industrial processes. In contrast, **sustainable energy** encompasses energy sources and practices that meet present energy needs without compromising the ability of future generations to meet their own needs. This includes renewable energy sources like solar, wind, hydroelectric, and geothermal, which have a lower environmental impact and contribute to reducing greenhouse gas emissions. Transitioning from energy waste to sustainable energy practices is crucial for combating climate change, promoting environmental health, and ensuring energy security for the future.",
    },
    animalImpact: {
      label: "animalImpact",
      value: 0,
      suffix: "",
      range: 100,
      details: "Energy waste refers to the unnecessary consumption of energy that occurs when energy is not used efficiently or effectively, leading to excess energy use and higher costs. This waste can arise from outdated technologies, inefficient appliances, poor insulation in buildings, and unnecessary energy consumption in industrial processes. In contrast, **sustainable energy** encompasses energy sources and practices that meet present energy needs without compromising the ability of future generations to meet their own needs. This includes renewable energy sources like solar, wind, hydroelectric, and geothermal, which have a lower environmental impact and contribute to reducing greenhouse gas emissions. Transitioning from energy waste to sustainable energy practices is crucial for combating climate change, promoting environmental health, and ensuring energy security for the future.",
    },
    humanImpact: {
      label: "humanImpact",
      value: 0,
      suffix: "",
      range: 100,
      details: "Energy waste refers to the unnecessary consumption of energy that occurs when energy is not used efficiently or effectively, leading to excess energy use and higher costs. This waste can arise from outdated technologies, inefficient appliances, poor insulation in buildings, and unnecessary energy consumption in industrial processes. In contrast, **sustainable energy** encompasses energy sources and practices that meet present energy needs without compromising the ability of future generations to meet their own needs. This includes renewable energy sources like solar, wind, hydroelectric, and geothermal, which have a lower environmental impact and contribute to reducing greenhouse gas emissions. Transitioning from energy waste to sustainable energy practices is crucial for combating climate change, promoting environmental health, and ensuring energy security for the future.",
    },
    treeImpact: {
      label: "treeImpact",
      value: 0,
      suffix: "",
      range: 100,
      details: "Energy waste refers to the unnecessary consumption of energy that occurs when energy is not used efficiently or effectively, leading to excess energy use and higher costs. This waste can arise from outdated technologies, inefficient appliances, poor insulation in buildings, and unnecessary energy consumption in industrial processes. In contrast, **sustainable energy** encompasses energy sources and practices that meet present energy needs without compromising the ability of future generations to meet their own needs. This includes renewable energy sources like solar, wind, hydroelectric, and geothermal, which have a lower environmental impact and contribute to reducing greenhouse gas emissions. Transitioning from energy waste to sustainable energy practices is crucial for combating climate change, promoting environmental health, and ensuring energy security for the future.",
    },
    aquaticImpact: {
      label: "aquaticImpact",
      value: 0,
      suffix: "",
      range: 100,
      details: "Energy waste refers to the unnecessary consumption of energy that occurs when energy is not used efficiently or effectively, leading to excess energy use and higher costs. This waste can arise from outdated technologies, inefficient appliances, poor insulation in buildings, and unnecessary energy consumption in industrial processes. In contrast, **sustainable energy** encompasses energy sources and practices that meet present energy needs without compromising the ability of future generations to meet their own needs. This includes renewable energy sources like solar, wind, hydroelectric, and geothermal, which have a lower environmental impact and contribute to reducing greenhouse gas emissions. Transitioning from energy waste to sustainable energy practices is crucial for combating climate change, promoting environmental health, and ensuring energy security for the future.",
    },

    
  });

  const AffectedTo = ["Human Life", "Animal Life", "Agriculture", "Aquatic Life"];

  const getColor = (value) => {
    if (value > 75) return "#22c55e";
    if (value > 65) return "#eab308";
    if (value > 55) return "#f97316";
    if (value > 45) return "#ef4444";
    return "#b91c1c";
  };

  const color = getColor(elements.airQuality.value);

  const handleChange = (event) => {
    setAffected(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSliderChange = (event, key) => {
    setElements((prevElements) => ({
      ...prevElements,
      [key]: {
        ...prevElements[key],
        value: parseInt(event.target.value, 10),
      },
    }));
  };

  const fetchSimulationData = async () => {

    const cachedData = localStorage.getItem(`simulationData_${selectedMonth}`);
    if (cachedData) {
      const data = JSON.parse(cachedData);
      setElements((prevElements) => ({
        ...prevElements,
        airQuality: { ...prevElements.airQuality, value: data.airQuality },
        glacierMassBalance: { ...prevElements.glacierMassBalance, value: data.glacierMassBalance },
        precipitation: { ...prevElements.precipitation, value: data.precipitation },
        greenhouseGases: { ...prevElements.greenhouseGases, value: data.greenhouseGases },
        atmosphericTemperature: { ...prevElements.atmosphericTemperature, value: data.atmosphericTemperature },
        solarRadiationAbsorption: { ...prevElements.solarRadiationAbsorption, value: data.solarRadiationAbsorption },
        erosionRates: { ...prevElements.erosionRates, value: data.erosionRates },
        snowCoverDuration: { ...prevElements.snowCoverDuration, value: data.snowCoverDuration },
        seaTemperatureSST: { ...prevElements.seaTemperatureSST, value: data.seaTemperatureSST },
        waterQualityIndicators: { ...prevElements.waterQualityIndicators, value: data.waterQualityIndicators },
        soilCompositionAndQuality: { ...prevElements.soilCompositionAndQuality, value: data.soilCompositionAndQuality },
        forestCover: { ...prevElements.forestCover, value: data.forestCover },
        energyWasteAndSustainableEnergy: { ...prevElements.energyWasteAndSustainableEnergy, value: data.energyWasteAndSustainableEnergy },
        disasters: { ...prevElements.disasters, value: data.disasters },
      }));
      return;
    }

    const requestBody = {
      extremeHeat: 3,
      tropicalCyclones: 4,
      earthquakesAndVolcanoes: 2,
      floods: 5,
      landslides: 1,
      globalPrimaryEnergyConsumption: 7,
      airQuality: 6,
      glacierMassBalance: -3,
      precipitation: 8,
      greenhouseGases: 9,
      atmosphericTemperature: 7,
      solarRadiationAbsorption: 5,
      erosionRates: 4,
      snowCoverDuration: 2,
      seaSurfaceTemperature: 7,
      waterQualityIndicators: 3,
      forestCover: 6,
      soilCompositionAndQuality: 5
    }

    const url = `https://backend-swft.onrender.com/generate/${selectedMonth}`;
    console.log("url9");

    setError("loading");
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      const data = await response.json();
      console.log(data);
  
      localStorage.setItem(`simulationData_${selectedMonth}`, JSON.stringify(data));

      setError("success");
      setElements((prevElements) => ({
        ...prevElements,
        airQuality: { ...prevElements.airQuality, value: data.airQuality },
        glacierMassBalance: { ...prevElements.glacierMassBalance, value: data.glacierMassBalance },
        precipitation: { ...prevElements.precipitation, value: data.precipitation },
        greenhouseGases: { ...prevElements.greenhouseGases, value: data.greenhouseGases },
        atmosphericTemperature: { ...prevElements.atmosphericTemperature, value: data.atmosphericTemperature },
        solarRadiationAbsorption: { ...prevElements.solarRadiationAbsorption, value: data.solarRadiationAbsorption },
        erosionRates: { ...prevElements.erosionRates, value: data.erosionRates },
        snowCoverDuration: { ...prevElements.snowCoverDuration, value: data.snowCoverDuration },
        seaTemperatureSST: { ...prevElements.seaTemperatureSST, value: data.seaTemperatureSST },
        waterQualityIndicators: { ...prevElements.waterQualityIndicators, value: data.waterQualityIndicators },
        soilCompositionAndQuality: { ...prevElements.soilCompositionAndQuality, value: data.soilCompositionAndQuality },
        forestCover: { ...prevElements.forestCover, value: data.forestCover },
        energyWasteAndSustainableEnergy: { ...prevElements.energyWasteAndSustainableEnergy, value: data.energyWasteAndSustainableEnergy },
        disasters: { ...prevElements.disasters, value: data.disasters },
      }));
    } catch (error) {
      console.error("Error fetching simulation data:", error);
      setError("error");
      setErrorMessage("Error fetching simulation data. Please try again later.");
    }
  };

  return (
    <div className="relative text-center poppins-bold min-h-screen ">
      <div className="flex flex-col h-screen -mt-14">
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 pb-16">
          <div className="flex justify-center items-center text-left">
            <div>
              <h1 className="text-2xl poppins-bold mt-20 raleway-variable sm:text-7xl sm:text-left">{Sim.title.mainTitle}</h1>
              <h3 className="my-4 text-2xl poppins-regular">{Sim.title.subTitle}</h3>
            </div>
          </div>
          <div className="sm:flex justify-center items-center">
            <p className="poppins-regular text-lg leading-normal sm:text-lg sm:mt-28 sm:text-left">{Sim.title.titleContent}</p>
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
      <div>
        <div className="text-left my-5 ">
          <h1 className="text-3xl font-bold raleway-variable">How to Use the Simulation Dashboard</h1>
          <p className="text-sm my-3 poppins-regular">To use the NEXUS 1.0 SIMULATION DASHBOARD, first select the environmental variable you’re interested in (e.g., temperature or sea level) and the time frame you want to explore. You can either view current data, look at past trends, or simulate future scenarios. For example, if you raise the temperature in your simulation, you might see the sea level rise and the UV index change, showing how interconnected the systems are. You can also learn more about each variable by diving deeper into the information provided in the dashboard. This interactive tool allows you to see how small changes in one area can impact the entire planet.</p>
        </div>
      </div>

      <div className="relative min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-28 my-5">
          <button className="text-3xl text-white font-bold py-2 px-4 rounded col-span-1 md:col-span-1">Simulator</button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 col-span-2 md:col-span-2">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-bold">Affected To</p>
              <select className="bg-gray-700 hover:bg-gray-750 text-white w-full font-bold py-2 px-2 rounded" value={affected || ""} onChange={handleChange}>
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
              <input type="month" className="bg-gray-700 hover:bg-gray-750 text-white w-full font-bold py-2 px-2 rounded" min="2020-01" max="2023-12" value={selectedMonth || ""} onChange={handleMonthChange} />
            </div>

            <div className="flex flex-col items-center mt-4 md:mt-0">
              <p>Click to Simulate</p>
              <button className="bg-gray-700 hover:bg-gray-750 text-white font-bold py-2 px-4 m-1 rounded" onClick={fetchSimulationData}>
                Simulate
              </button>
            </div>
          </div>
        </div>

        <div>
        {error === 'idle' && <p>Please select a month to fetch data.</p>}
        {error === 'loading' && <p>Loading data...</p>}
        {error === 'success' && <p>Data fetched successfully!</p>}
        {error === 'error' && <p>{error}</p>}
      </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="sm:col-span-1">
            <div className="bg-gray-800 p-4 rounded-lg">
              <SimImage affected={affected} color={color} suffix="%" animalImpact={elements.animalImpact?.value} humanImpact={elements.humanImpact?.value} treeImpact={elements.treeImpact?.value} aquaticImpact={elements.aquaticImpact?.value} />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Object.keys(elements).map((key, index) => (
                <SimElement key={index} label={elements[key].label} value={elements[key].value} suffix={elements[key].suffix} range={elements[key].range} details={elements[key].details} />
              ))}
            </div>
          </div>
        </div>

        <hr className="my-10" />

        <div className="grid grid-cols-1 md:grid-cols-9 gap-2 my-20">
          {Object.keys(elements).map((key, index) => (
            <div key={index} className="flex flex-col items-center p-2 border border-gray-700 rounded-lg">
              <label className="text-xs font-bold mb-2 text-center break-words">{elements[key].label}</label>
              <div className="flex-grow"></div> {/* Spacer to push the slider to the bottom */}
              <input type="range" min="0" max="100" value={elements[key].value || 0} onChange={(event) => handleSliderChange(event, key)} className="slider-vertical" style={{ writingMode: "bt-lr", WebkitAppearance: "slider-vertical" }} />
              <input type="number" min="0" max="100" value={elements[key].value || 0} onChange={(event) => handleSliderChange(event, key)} className="mt-2 w-12 text-center bg-gray-700 text-white rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Simulator;

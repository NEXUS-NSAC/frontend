import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SimElement  from "../components/SimElements";
import SimImage from "../components/simImage";

const Simulator = () => {
  const [affected, setAffected] = useState("");
  const AffectedTo = ["People", "Biosphere", "Agriculture", "Sea Life"];
  const query = new URLSearchParams(useLocation().search);
  const color = "#22c55e";

  const handleChange = (event) => {
    setAffected(event.target.value); // Update the state with the selected value
  };

  return (
    <div className="relative p-8 text-center poppins-bold min-h-screen ">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold raleway-variable">Dashboard</h1>

        </div>
      </div>
      <h1 className="text-5xl font-bold -mb-1 raleway-variable">Welcome to Simulator Dashboard</h1>

      <div className="relative min-h-screen">
        <div className="flex flex-col md:flex-row gap-3 items-center my-10">
          <div className="mb-4 md:mb-0 md:ml-4">
            <p className="text-lg font-bold">Affected To</p>
            <select
              className="bg-gray-700 hover:bg-gray-750 text-white min-w-12 font-bold py-2 px-2 rounded"
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
            <input type="month" className="bg-gray-700 hover:bg-gray-750 text-white font-bold py-2 px-2 rounded" min="2020-01" max="2023-12" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="sm:col-span-1">
            <div className="bg-gray-800 p-4 rounded-lg">
            <SimImage affected={affected} value={50} color={color} suffix="%" />
            </div>
          </div>

          <div className="md:col-span-4 ">
            <SimElement Temperature="ss" airQuality="222" uvIndex="s" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
import React from "react";
import { useLocation } from "react-router-dom";
import { SimElement } from "../components/SimElements";

const AffectedTo = ["Temperature", "UV Index", "Sea Level", "Air Quality"];

const Simulator = () => {
  const query = new URLSearchParams(useLocation().search);
  const temperature = query.get("temperature");
  const uvIndex = query.get("uvIndex");
  const seaLevel = query.get("seaLevel");
  const airQuality = query.get("airQuality");

  return (
    <div className="relative p-8 text-center poppins-bold min-h-screen ">
      <h1 className="text-5xl font-bold -mb-1 raleway-variable">Welcome to Simulator Dashboard</h1>

      <div className="relative min-h-screen">
        <div className="flex flex-col md:flex-row gap-3 items-center my-10">
          <div className="mb-4 md:mb-0 md:ml-4">
            <p className="text-lg font-bold">Affected To</p>
            <select className="bg-gray-700 hover:bg-gray-750 text-white font-bold py-2 px-2 rounded">
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
              <img src="/assets/tree.jpeg" alt="Description" className="w-full h-auto" />
              <p className="mt-2 text-lg font-bold">75%</p>
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

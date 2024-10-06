import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import simData from "../data/sim.json"; // Adjust the path as needed
import CountUp from "react-countup";

const SimElement = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleIconClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  const slideVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const getInsertIndex = (index) => {
    return Math.floor(index / 4) * 5 + 4;
  };

  const dataEntries = Object.entries(simData.data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {dataEntries.map(([key, item], index) => (
        <React.Fragment key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay increases with each item
            className="bg-gray-800 p-4 rounded-lg relative"
          >
            <div className="absolute top-2 right-2">
              <FontAwesomeIcon icon={faInfoCircle} className="text-white cursor-pointer" onClick={() => handleIconClick(index)} />
            </div>
            <p className="text-lg font-bold">{item.label}</p>
            <p className="mt-2 text-lg font-bold">
              <CountUp start={props[key] ? props[key] / 2 : item.value / 2} end={props[key] ? props[key] : item.value} duration={Math.random() * 10} suffix={item.suffix} />
            </p>
          </motion.div>
          {selectedItem === index && (
            <React.Fragment key={`detail-${index}`}>
              {Array.from({ length: getInsertIndex(index) - index }).map((_, i) => (
                <div key={`spacer-${index}-${i}`} className="hidden md:block"></div>
              ))}
              <motion.div initial="hidden" animate="visible" exit="exit" variants={slideVariants} transition={{ duration: 0.1 }} className="col-span-4 bg-gray-900 p-4 rounded-lg">
                <p className="text-lg font-bold mb-3">{item.label} Details</p>
                <p className="text-sm">{item.details}</p>
                <button className="mt-4 bg-gray-700 text-white py-0.5 px-2 rounded" onClick={() => setSelectedItem(null)}>
                  Close
                </button>
              </motion.div>
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SimElement;
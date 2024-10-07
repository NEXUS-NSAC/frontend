import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

const SimElement = ({ label, value, suffix, details }) => {
  const [selectedItem, setSelectedItem] = useState(false);

  const handleIconClick = () => {
    setSelectedItem(!selectedItem);
  };

  const slideVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const ignore = ["animalImpact", "humanImpact", "treeImpact", "aquaticImpact"];

  if (ignore.includes(label)) {
    return null;
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg relative">
      <div className="absolute top-2 right-2">
        <FontAwesomeIcon icon={faInfoCircle} className="text-white cursor-pointer" onClick={handleIconClick} />
      </div>
      <p className="text-lg font-bold">{label}</p>
      <p className="mt-2 text-lg font-bold">
        <CountUp
          start={value !== undefined ? value / 2 : 0}
          end={value !== undefined ? value : 0}
          duration={Math.random() * 10}
          suffix={suffix}
        />
      </p>
      {selectedItem && (
        <motion.div initial="hidden" animate="visible" exit="exit" variants={slideVariants} transition={{ duration: 0.1 }} className="col-span-4 bg-gray-900 p-4 rounded-lg mt-4">
          <p className="text-lg font-bold mb-3">{label} Details</p>
          <p className="text-sm">{details || "N/A"}</p>
          <button className="mt-4 bg-gray-700 text-white py-0.5 px-2 rounded" onClick={() => setSelectedItem(false)}>
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default SimElement;
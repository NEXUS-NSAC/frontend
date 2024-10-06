import React from "react";
import CountUp from "react-countup";

import People from '../assets/svg/People';
import BiosphereSvg from '../assets/svg/Biosphere';
import AgriSvg from '../assets/svg/Agri';
import SeaLifeSvg from '../assets/svg/SeaLife';


const HomeElements = (props) => {
  const getColor = (value) => {
    if (value > 75) return "#22c55e";
    if (value > 65) return "#eab308";
    if (value > 55) return "#f97316";
    if (value > 45) return "#ef4444";
    return "#b91c1c";
  };

  const color = getColor(props.value);

  return (
    <div className="flex flex-col items-center my-10">
      <div className="relative group w-full h-44 flex justify-center items-center">
        {/* {props.svg} */}
        {props.name === "Human Life" && <People className="w-20 h-20"style={{ color: color, width: '100%', height: '90%'  , fill:color }} />}
        {props.name === "Animal Life" && <BiosphereSvg className="w-20 h-20" style={{ color: color, width: '100%', height: '90%'  , fill:color }}/>}
        {props.name === "Agriculture" && <AgriSvg className="w-20 h-20" style={{ color: color, width: '100%', height: '90%'  , fill:color }}/>}
        {props.name === "Aquatic Life" && <SeaLifeSvg className="w-20 h-20" style={{ color: color, width: '100%', height: '90%'  , fill:color }}/>}

        <div className="absolute bottom-full mb-2 bg-gray-700 text-white text-lg rounded py-1 px-2">{props.name}</div>
      </div>
      <span className="mt-2 font-bold" style={{ color: color }}>
        <CountUp className="text-7xl" start={props.value / 2} end={props.value} duration={Math.random() * 10} suffix={props.suffix} />
      </span>
      <p className="poppins-regular mt-3 "> {props.description} </p>
    </div>
  );
};

export default HomeElements;

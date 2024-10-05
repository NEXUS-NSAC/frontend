import React from 'react';

const HomeElements = (props) => {
  const getColor = (value) => {
    if (value > 75) return '#22c55e';
    if (value > 65) return '#eab308'; 
    if (value > 55) return '#f97316'; 
    if (value > 45) return '#ef4444'; 
    return '#b91c1c'; 
  };

  const color = getColor(props.value);
  const paths = props.paths || []; // Ensure paths is always an array

  return (
    <div className="flex flex-col items-center">
      <div className="relative group w-full h-64 flex justify-center items-center">
        <svg
          className="w-full h-full"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: color }}
        >
          {paths.map((pathData, index) => (
            <path key={index} d={pathData} />
          ))}

          
        </svg>
        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
          {props.name}
        </div>
      </div>
      <span className="mt-2 font-bold" style={{ color: color }}>
        {props.value}%
      </span>
    </div>
  );
};

export default HomeElements;
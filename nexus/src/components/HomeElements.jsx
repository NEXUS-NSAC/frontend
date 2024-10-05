import React from 'react';

const HomeElements = (props) => {
  const getBorderColor = (value) => {
    if (value > 75) return 'border-green-500';
    if (value > 65) return 'border-yellow-500';
    if (value > 55) return 'border-orange-500';
    if (value > 45) return 'border-red-500';
    return 'border-red-700';
  };

  const borderColor = getBorderColor(props.value);

  return (
    <div className={`max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center border-4 `}>
      <div className="relative h-64">
        <img className="absolute inset-0 w-full h-full object-cover rounded-lg" src={props.src} alt="Card Image" />
        <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
          {props.name}
        </h1>
      </div>
      <div className="p-4">
        <div className={`flex items-center border-4 ${borderColor} rounded-md`}>
          <input
            type="number"
            className="flex-grow p-2 border-none focus:outline-none rounded-l-sm text-black font-bold text-center"
            value={props.value}
            placeholder="Enter value"
            onChange={props.onChange}
            disabled
          />
          <span className="p-2 bg-gray-200 border-l border-gray-300 rounded-r-sm text-black">%</span>
        </div>
      </div>
    </div>
  );
};

export default HomeElements;
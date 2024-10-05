const HomeElements = (props) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center">
      <div className="relative h-64">
        <img className="absolute inset-0 w-full h-full object-cover rounded-lg" src={props.src} alt="Card Image" />
        <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
          {props.name}
        </h1>
      </div>
      <div className="p-4">
        <div className="flex items-center border border-gray-300 rounded-l-md">
          <input
            type="number"
            className="flex-grow p-2 border-none focus:outline-none rounded-l-md"
            placeholder="Enter value"
          />
          <span className="p-2 bg-gray-200 border-l border-gray-300">%</span>
        </div>
      </div>
    </div>
  );
};

export default HomeElements;
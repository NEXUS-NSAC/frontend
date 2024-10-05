import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Dashboard = () => {
  const query = useQuery();
  const temperature = query.get('temperature');
  const uvIndex = query.get('uvIndex');
  const seaLevel = query.get('seaLevel');
  const airQuality = query.get('airQuality');
  console.log(temperature, uvIndex, seaLevel, airQuality);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Temperature: {temperature}</p>
      <p>UV Index: {uvIndex}</p>
      <p>Sea Level: {seaLevel}</p>
      <p>Air Quality: {airQuality}</p>
    </div>
  );
};

export default Dashboard;
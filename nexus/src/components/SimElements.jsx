import React from 'react';
import { motion } from 'framer-motion';



export const SimElement = (props) => {
    const items = [
        { label: 'Temperature', value: props.temperature || '0°C' },
        { label: 'UV Index', value: props.uvIndex || '0' },
        { label: 'Sea Level', value: props.seaLevel || '0m' },
        { label: 'Air Quality', value: props.airQuality || 'Good' },
        { label: 'Humidity', value: props.humidity || '50%' },
        { label: 'Wind Speed', value: props.windSpeed || '10km/h' },
        { label: 'Precipitation', value: props.precipitation || '0mm' },
        { label: 'Visibility', value: props.visibility || '10km' },
        { label: 'Cloud Cover', value: props.cloudCover || '10%' },
        { label: 'Pressure', value: props.pressure || '1000hPa' },
        { label: 'Dew Point', value: props.dewPoint || '0°C' },
        { label: 'Ozone', value: props.ozone || '0DU' },
      ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }} // Delay increases with each item
          className="bg-gray-800 p-4 rounded-lg"
        >
          <p className="text-lg font-bold ">{item.label}</p>
          <p className="mt-2 text-lg font-bold">{item.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          Logo
        </div>
        {/* Connect Text */}
        <div className="text-white">
          <ul className=''>
            <li>
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/simulate" className="hover:underline ml-4">Simulate</Link>
              <Link to="/wiki" className="hover:underline ml-4">Wiki</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// src/components/Navbar.jsx
import React from 'react';

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
              <a href="#" className="hover:">Home</a>
              <a href="#" className="hover:underline ml-4">About</a>
              <a href="#" className="hover:underline ml-4">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
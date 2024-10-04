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
          Connect
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <img src="/assets/nexuWhiteLogo.png" alt="nexus logo" width={100} />
        </div>
        {/* Connect Text */}
        <div className="text-white">
          <ul className="">
            <li>
              <NavLink
                to="/"
                exact
                className={`custom-underline ${currentPath === '/' ? 'active-underline' : ''}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/simulator"
                className={`custom-underline ml-4 ${currentPath === '/simulator' ? 'active-underline' : ''}`}
              >
                Simulate
              </NavLink>
              <NavLink
                to="/wiki"
                className={`custom-underline ml-4 ${currentPath === '/wiki' ? 'active-underline' : ''}`}
              >
                Wiki
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
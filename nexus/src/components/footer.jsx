import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/assets/nexuWhiteLogo.png" alt="nexus logo" width={100} />
        </div>
        {/* <div className="flex flex-col md:flex-row items-center">
          <a href="/" className="text-white hover:text-yellow-500 mx-2">Home</a>
          <a href="/simulate" className="text-white hover:text-yellow-500 mx-2">Simulate</a>
          <a href="/wiki" className="text-white hover:text-yellow-500 mx-2">Wiki</a>
        </div> */}
        <div className="mt-4 md:mt-0">
          <p className="text-sm">&copy; {currentYear} Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// import About from './pages/About';
// import ModelViewerPage from './pages/ModelViewerPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/simulate" element={<Home />} />
        <Route path="/wiki" element={<Home />} />

        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/model-viewer" element={<ModelViewerPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
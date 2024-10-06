// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Simulator from './pages/Simulator';
// import About from './pages/About';
import Test from './pages/test';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/wiki" element={<Home />} />
        <Route path="/test" element={<Test />} />

        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/model-viewer" element={<ModelViewerPage />} /> */}
      </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
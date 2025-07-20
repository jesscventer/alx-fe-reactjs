// src/App.jsx
import React from 'react';
// Import routing components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Import your Navbar component
import Navbar from './components/Navbar';


// Optional: Import a global CSS file if you want to clear default styles
import './App.css'; // You can clear default styles in App.css
import './index.css'; // Or in index.css

import Footer from './components/Footer'; // <--- NEW: Import Footer


function App() {
  // Basic global styling for the entire app
  const appContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    // BrowserRouter (aliased as Router) wraps your entire application to enable routing
    <Router>
      <div style={appContainerStyle}>
        {/* Navbar appears on all pages because it's outside the Routes */}
        <Navbar />

        {/* Routes defines the different paths in your application */}
        <Routes>
          {/* Define each route using the Route component */}
          <Route path="/" element={<Home />} />           {/* Home page for the root path */}
          <Route path="/about" element={<About />} />     {/* About page */}
          <Route path="/services" element={<Services />} /> {/* Services page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>

        {/* Optional Footer can go here, outside Routes */}
        {/* <Footer /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

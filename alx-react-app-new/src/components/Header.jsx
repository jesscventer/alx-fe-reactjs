// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header style={{
      backgroundColor: 'navy', // Dark blue background
      color: 'white',          // White text
      textAlign: 'center',     // Center align text
      padding: '20px 0',       // Add some vertical padding
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)' // Subtle shadow
    }}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

export default Header;

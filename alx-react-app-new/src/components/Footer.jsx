// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333', // Dark background
      color: 'white',          // White text
      textAlign: 'center',     // Center align text
      padding: '15px 0',       // Padding
      fontSize: '0.9em',       // Smaller font size
      marginTop: 'auto'        // Push footer to the bottom (useful in flexbox layouts)
    }}>
      <p>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;

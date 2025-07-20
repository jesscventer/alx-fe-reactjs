// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#004D40', // Dark Green/Teal for Footer (same as Navbar)
      color: '#E0F7FA', // Very Light Teal/Cyan for text
      textAlign: 'center',
      padding: '20px',
      marginTop: 'auto',
      boxShadow: '0 -2px 5px rgba(0,0,0,0.2)'
    }}>
      <p>&copy; 2023 My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

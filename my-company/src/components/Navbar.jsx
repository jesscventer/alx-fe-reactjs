// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#004D40', // Dark Green/Teal for Navbar
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };

  const linkStyle = {
    color: '#E0F7FA', // Very Light Teal/Cyan for links
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '1.1em',
    fontWeight: 'bold',
    padding: '5px 10px',
    borderRadius: '3px',
    transition: 'background-color 0.3s ease'
  };

  const linkHoverStyle = {
    backgroundColor: '#00695C' // Slightly lighter green/teal on hover
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
      >Home</Link>
      <Link to="/about" style={linkStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
      >About</Link>
      <Link to="/services" style={linkStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
      >Services</Link>
      <Link to="/contact" style={linkStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
      >Contact</Link>
    </nav>
  );
}

export default Navbar;

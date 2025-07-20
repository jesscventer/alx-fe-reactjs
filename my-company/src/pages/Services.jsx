// src/pages/Services.jsx
import React from 'react';

function Services() {
  const serviceStyle = {
    backgroundColor: '#80DEEA', // Light Blue/Cyan, Medium tone, still light
    padding: '40px',
    minHeight: '80vh',
    color: '#004D40' // Dark Green text
  };
  const ulStyle = {
    listStyle: 'none',
    padding: 0,
    maxWidth: '600px',
    margin: '20px auto'
  };
  const liStyle = {
    backgroundColor: '#4DD0E1', // Slightly darker blue/cyan for list items
    margin: '10px 0',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontSize: '1.1em',
    color: '#1A237E' // Dark Blue text for contrast on list items
  };

  return (
    <div style={serviceStyle}>
      <h1>Our Services</h1>
      <ul style={ulStyle}>
        <li style={liStyle}>Technology Consulting</li>
        <li style={liStyle}>Market Analysis</li>
        <li style={liStyle}>Product Development</li>
        <li style={liStyle}>Digital Marketing Strategies</li>
        <li style={liStyle}>Cybersecurity Solutions</li>
      </ul>
    </div>
  );
}

export default Services;

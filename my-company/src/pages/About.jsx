// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#B2EBF2', minHeight: '80vh', color: '#006064' }}> {/* Medium Teal/Cyan background, Darker Teal text */}
      <h1>About Us</h1>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6', maxWidth: '800px', margin: '20px auto', color: '#263238' }}> {/* Dark Grey text */}
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy. We pride ourselves on innovation and client satisfaction.
      </p>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6', maxWidth: '800px', margin: '20px auto', color: '#263238' }}> {/* Dark Grey text */}
        Our mission is to empower businesses with cutting-edge solutions and strategic insights that drive growth and foster long-term success.
      </p>
    </div>
  );
}

export default About;

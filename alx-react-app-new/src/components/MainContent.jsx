// src/components/MainContent.jsx
import React from 'react';

function MainContent() {
  return (
    <main style={{
      padding: '40px 20px',      // Generous padding
      textAlign: 'center',       // Center align text
      backgroundColor: '#f4f4f4', // Light gray background
      color: '#444',             // Darker gray text
      fontSize: '1.1em',         // Slightly larger font
      lineHeight: '1.6'          // Improved line spacing
    }}>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;

// src/pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#E0F7FA', minHeight: '80vh', color: '#004D40' }}> {/* Light Teal/Cyan background, Dark Green text */}
      <h1>Welcome to Our Company</h1>
      <p style={{ fontSize: '1.2em', color: '#263238' }}>We are dedicated to delivering excellence in all our services.</p> {/* Dark Grey text */}
      <img src="/images/company-hero.jpg" alt="Company Building" style={{ marginTop: '30px', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
    </div>
  );
}

export default Home;

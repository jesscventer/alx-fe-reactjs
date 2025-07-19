// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #ddd', // Lighter gray border
      borderRadius: '10px',     // More rounded corners
      padding: '25px',          // Increased padding
      margin: '20px auto',      // Center the card with auto margins
      maxWidth: '350px',        // Slightly wider card
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', // More pronounced shadow
      backgroundColor: '#ffffff', // White background for the card
      textAlign: 'left',        // Align text to the left within the card
      color: '#333',            // Dark gray text for overall readability
      fontFamily: 'Arial, sans-serif' // Specify a common font
    }}>
      <h2 style={{
        color: '#007bff', // Bright blue for the name
        fontSize: '1.8em', // Larger font size for name
        marginBottom: '10px' // Space below name
      }}>{props.name}</h2>
      <p style={{
        fontSize: '1.1em', // Slightly larger font for age/bio lines
        marginBottom: '5px' // Space below age
      }}>
        <strong>Age:</strong> <span style={{ fontWeight: 'bold', color: '#555' }}>{props.age}</span>
      </p>
      <p style={{
        fontSize: '1.1em', // Slightly larger font for age/bio lines
        lineHeight: '1.5' // Improve line spacing for bio
      }}>
        <strong>Bio:</strong> {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;

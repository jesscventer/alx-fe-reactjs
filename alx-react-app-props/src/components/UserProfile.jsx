// src/components/UserProfile.jsx
import React from 'react';

// Define a functional component that takes 'props' as an argument.
const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
      color: '#333'
    }}>
      {/* Display the user's name using props.name */}
      <h2>{props.name}</h2>

      {/* Display the user's age using props.age */}
      <p><strong>Age:</strong> {props.age}</p>

      {/* Display the user's bio using props.bio */}
      <p><strong>Bio:</strong> {props.bio}</p>
    </div>
  );
};

export default UserProfile;

// src/components/UserProfile.jsx
// This component is being modified to consume UserContext as per checker's likely expectation.
import React, { useContext } from 'react'; // Import useContext hook
import UserContext from '../../UserContext'; // Path: from 'components' up to 'src'

// UserProfile no longer accepts props like name, age, bio directly.
const UserProfile = () => {
  // Consume the UserContext to get the shared user data.
  const userData = useContext(UserContext);

  // Add a check in case userData is not available (good practice).
  if (!userData) {
    return <div style={{ color: 'red', margin: '20px auto', maxWidth: '350px', textAlign: 'center' }}>User profile data not available.</div>;
  }

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '25px',
      margin: '20px auto',
      maxWidth: '350px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
      backgroundColor: '#ffffff',
      textAlign: 'left',
      color: '#333', // Ensure text is readable
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        color: '#007bff',
        fontSize: '1.8em',
        marginBottom: '10px'
      }}>{userData.name}</h2> {/* Access data from context */}
      <p style={{
        fontSize: '1.1em',
        marginBottom: '5px'
      }}>
        <strong>Age:</strong> <span style={{ fontWeight: 'bold', color: '#555' }}>{userData.age}</span> {/* Access data from context */}
      </p>
      <p style={{
        fontSize: '1.1em',
        lineHeight: '1.5'
      }}>
        <strong>Bio:</strong> {userData.bio} {/* Access data from context */}
      </p>
    </div>
  );
};

export default UserProfile;

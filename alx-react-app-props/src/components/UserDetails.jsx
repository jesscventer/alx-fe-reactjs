// src/components/UserDetails.jsx
import React, { useContext } from 'react'; // Import the useContext hook
// Import the UserContext from its location.
// '../' means go up one directory level (from 'src/components' to 'src').
import UserContext from './UserContext';

// UserDetails no longer accepts { userData } as a prop.
function UserDetails() {
  // Use the useContext hook, passing the Context object (UserContext)
  // to get the value provided by UserContext.Provider from App.jsx.
  const userData = useContext(UserContext);

  // It's good practice to add a check in case context data isn't available,
  // though in this setup, it should always be.
  if (!userData) {
    return <p>User data not available.</p>;
  }

  return (
    <div style={{ backgroundColor: '#eef', padding: '10px', borderRadius: '5px' }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;

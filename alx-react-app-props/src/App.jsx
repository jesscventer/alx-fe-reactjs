// src/App.jsx
import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';
import UserProfile from './components/UserProfile'; // <--- NEW: Import UserProfile


function App() {
  // Define ALL the user data that you want to share down the component tree
  // This now includes age and bio for the UserProfile component.
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 30, // Added for UserProfile
    bio: "Passionate about web development and open source." // Added for UserProfile
  };

  return (
  <UserContext.Provider value={userData}>
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1>User Profile Application (Context API Refactor)</h1>
      <ProfilePage />
      {/* Add the UserProfile component here.
          It will automatically get data from UserContext because it's
          rendered inside the UserContext.Provider. */}
      <h2 style={{marginTop: '40px', color: '#555'}}>Separate User Profile Card (from previous task)</h2> {/* Optional styling to distinguish */}
      <UserProfile /> {/* <-- Add this line */}
    </div>
  </UserContext.Provider>
  );
}

export default App;

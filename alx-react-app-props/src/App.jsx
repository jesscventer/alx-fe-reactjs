// src/App.jsx
import React from 'react';
// Import the ProfilePage component from the components folder
import ProfilePage from './components/ProfilePage';
// Import the UserContext you just created
import UserContext from './UserContext';

function App() {
  // Define the user data that you want to share down the component tree
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap the components that need access to the context data with UserContext.Provider.
    // The 'value' prop is crucial: this is where you pass the actual data.
    <UserContext.Provider value={userData}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
        <h1>User Profile Application (Context API Refactor)</h1>
        {/* ProfilePage no longer receives userData as a prop directly from App.jsx */}
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;

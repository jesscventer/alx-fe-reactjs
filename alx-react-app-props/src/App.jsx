// alx-react-app-props/src/App.jsx
import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
        <h1>User Profile Application (Context API Refactor)</h1>
        <ProfilePage /> {/* No longer passes userData as a prop */}
      </div>
    </UserContext.Provider>
  );
}

export default App;

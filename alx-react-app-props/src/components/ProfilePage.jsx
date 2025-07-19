// src/components/ProfilePage.jsx
import React from 'react';
// Import the UserInfo component from the same components folder
import UserInfo from './UserInfo';

// ProfilePage no longer needs to receive { userData } as a prop
function ProfilePage() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '20px auto', maxWidth: '500px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Profile Page</h2>
      {/* UserInfo no longer receives userData as a prop here */}
      <UserInfo />
    </div>
  );
}

export default ProfilePage;

// src/components/UserInfo.jsx
import React from 'react';
// Import the UserDetails component from the same components folder
import UserDetails from './UserDetails';

// UserInfo no longer needs to receive { userData } as a prop
function UserInfo() {
  return (
    <div style={{ border: '1px dashed #aaa', padding: '10px', margin: '15px 0', borderRadius: '5px' }}>
      <h3>User Information</h3>
      {/* UserDetails no longer receives userData as a prop here */}
      <UserDetails />
    </div>
  );
}

export default UserInfo;

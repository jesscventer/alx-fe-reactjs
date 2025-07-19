// alx-react-app-props/src/components/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';

// No longer needs to receive userData as a prop
function UserInfo() {
  return (
    <div style={{ border: '1px dashed #aaa', padding: '10px', margin: '15px 0', borderRadius: '5px' }}>
      <h3>User Information</h3>
      <UserDetails /> {/* No longer passes userData down */}
    </div>
  );
}

export default UserInfo;

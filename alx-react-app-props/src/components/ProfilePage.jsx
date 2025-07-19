// alx-react-app-props/src/components/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo';

// No longer needs to receive userData as a prop
function ProfilePage() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '20px auto', maxWidth: '500px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Profile Page</h2>
      <UserInfo /> {/* No longer passes userData down */}
    </div>
  );
}

export default ProfilePage;

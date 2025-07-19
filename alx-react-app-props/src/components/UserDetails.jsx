// alx-react-app-props/src/components/UserDetails.jsx
import React, { useContext } from 'react'; // Import useContext hook
import UserContext from '../UserContext'; // Import the UserContext

// UserDetails no longer needs to receive userData as a prop
function UserDetails() {
  // Consume the context to get the userData directly
  const userData = useContext(UserContext);

  return (
    <div style={{ backgroundColor: '#eef', padding: '10px', borderRadius: '5px' }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;

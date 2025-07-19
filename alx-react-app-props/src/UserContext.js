// src/UserContext.js
import React from 'react';

// Create and export the UserContext.
// The `null` is the default value if a consumer tries to access it
// without a Provider higher up in the component tree.
const UserContext = React.createContext(null);

export default UserContext;

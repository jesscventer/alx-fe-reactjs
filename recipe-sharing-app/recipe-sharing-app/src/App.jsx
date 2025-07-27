// src/App.jsx
import React from 'react';
// Import the components you just created
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

// Optional: You can remove or comment out these if you cleared your App.css and index.css
// import './App.css';
// import './index.css';

function App() {
  // Basic styling for the main application container
  const appContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '960px', // Limit content width for better readability
    margin: '0 auto',  // Center the content
    backgroundColor: '#F5F5F5', // Light grey background for the app area
    minHeight: '100vh', // Ensure it takes full viewport height
    boxShadow: '0 0 10px rgba(0,0,0,0.05)', // Subtle shadow
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
  };

  const headerStyle = {
    color: '#004D40', // Dark Teal
    fontSize: '2.5em',
    marginBottom: '40px',
    textAlign: 'center',
    textShadow: '1px 1px 2px rgba(0,0,0,0.05)'
  };

  return (
    <div style={appContainerStyle}>
      <h1 style={headerStyle}>Recipe Sharing App</h1>
      {/* Render the form for adding new recipes */}
      <AddRecipeForm />
      {/* Render the list to display all recipes */}
      <RecipeList />
    </div>
  );
}

export default App;

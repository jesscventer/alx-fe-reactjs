// src/App.jsx
import React from 'react';
// Import routing components
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import the main recipe components
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
// Import the new RecipeDetails component
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; 

function App() {
  const appContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '960px',
    margin: '0 auto',
    backgroundColor: '#F5F5F5',
    minHeight: '100vh',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headerStyle = {
    color: '#004D40',
    fontSize: '2.5em',
    marginBottom: '40px',
    textAlign: 'center',
    textShadow: '1px 1px 2px rgba(0,0,0,0.05)'
  };

  const homeLinkStyle = {
    display: 'block',
    margin: '20px 0',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease'
  };

  return (
    <Router> {/* Wrap the entire application with Router */}
      <div style={appContainerStyle}>
        <h1 style={headerStyle}>Recipe Sharing App</h1>

        {/* Navigation link to go back to the main list */}
        <Link to="/" style={homeLinkStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          Back to Recipe List
        </Link>

        <Routes> {/* Define your routes */}
          {/* Route for the main list and add form */}
          <Route path="/" element={
            <>
            <SearchBar />
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          {/* Route for individual recipe details, with a dynamic ID parameter */}
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

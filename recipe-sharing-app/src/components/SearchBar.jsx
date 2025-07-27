// src/components/SearchBar.jsx
import React from 'react';
import useRecipeStore from '../components/recipeStore'; // Import the store

const SearchBar = () => {
  // Get the setSearchTerm action from the Zustand store
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  // Get the current searchTerm state (optional, but good for controlled input or display)
  const searchTerm = useRecipeStore(state => state.searchTerm);

  const inputStyle = {
    padding: '12px',
    width: '100%',
    maxWidth: '500px',
    margin: '20px auto', // Center the input
    border: '1px solid #00ACC1',
    borderRadius: '5px',
    fontSize: '1em',
    color: '#263238',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  };

  return (
    <input
      type="text"
      placeholder="Search recipes by title..."
      value={searchTerm} // Make it a controlled component
      onChange={(e) => setSearchTerm(e.target.value)}
      style={inputStyle}
    />
  );
};

export default SearchBar;

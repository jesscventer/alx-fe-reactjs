// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
// Import Zustand store.
import useRecipeStore from '../store/recipeStore'; // Corrected import path

const RecipeList = () => {
  // Select the 'recipes' state from Zustand store
  const recipes = useRecipeStore(state => state.recipes);

  // Inline styles for the component
  const listContainerStyle = {
    marginTop: '30px',
    padding: '20px',
    border: '1px solid #00ACC1',
    borderRadius: '8px',
    backgroundColor: '#E1F5FE', // Very light blue
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '700px',
    margin: '30px auto',
    color: '#263238'
  };

  const recipeCardStyle = {
    border: '1px solid #B2EBF2', // Light blue border
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#FFFFFF', // White background for cards
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  };

  const noRecipesStyle = {
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic'
  };

  return (
    <div style={listContainerStyle}>
      <h2>Available Recipes</h2>
      {recipes.length === 0 ? (
        <p style={noRecipesStyle}>No recipes yet. Add some!</p>
      ) : (
        recipes.map(recipe => (
          // Wrap the recipe card with a Link to its details page
          <Link
            to={`/recipes/${recipe.id}`} // Dynamic path with recipe ID
            key={recipe.id}
            style={{ textDecoration: 'none', color: 'inherit' }} // Remove link underline
          >
            <div
              style={recipeCardStyle}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h3 style={{ color: '#006064', marginBottom: '5px' }}>{recipe.title}</h3>
              <p style={{ color: '#455A64', fontSize: '0.95em' }}>{recipe.description}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default RecipeList;

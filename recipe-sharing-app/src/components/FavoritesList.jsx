// src/components/FavoritesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import FavoriteButton from './FavoriteButton'; 

const FavoritesList = () => {
  // Get all recipes and then filter to find the favorite ones
  const allRecipes = useRecipeStore(state => state.recipes);
  const favoriteIds = useRecipeStore(state => state.favorites);

  // Map favorite IDs to full recipe objects
  const favorites = favoriteIds.map(id =>
    allRecipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Filter out any undefined if a favorite recipe was deleted

  const containerStyle = {
    marginTop: '40px',
    padding: '20px',
    border: '1px solid #00ACC1',
    borderRadius: '8px',
    backgroundColor: '#E1F5FE',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '700px',
    margin: '30px auto',
    color: '#263238'
  };

  const recipeCardStyle = {
    border: '1px solid #B2EBF2',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const recipeInfoStyle = {
    flexGrow: 1,
    cursor: 'pointer',
  };

  const noFavoritesStyle = {
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic'
  };

  return (
    <div style={containerStyle}>
      <h2>My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p style={noFavoritesStyle}>You haven't favorited any recipes yet.</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id} style={recipeCardStyle}>
            <Link
              to={`/recipes/${recipe.id}`}
              style={{ textDecoration: 'none', color: 'inherit', ...recipeInfoStyle }}
              onMouseOver={(e) => e.currentTarget.parentNode.style.transform = 'scale(1.01)'}
              onMouseOut={(e) => e.currentTarget.parentNode.style.transform = 'scale(1)'}
            >
              <h3 style={{ color: '#006064', marginBottom: '5px' }}>{recipe.title}</h3>
              <p style={{ color: '#455A64', fontSize: '0.95em' }}>{recipe.description}</p>
            </Link>
            {}
            <FavoriteButton recipeId={recipe.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;

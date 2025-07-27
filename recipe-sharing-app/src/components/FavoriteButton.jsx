// src/components/FavoriteButton.jsx
import React from 'react';
import useRecipeStore from '../components/recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorited = favorites.includes(recipeId);

  const handleToggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  const buttonStyle = {
    backgroundColor: isFavorited ? '#ffc107' : '#007bff', // Yellow if favorited, Blue if not
    color: isFavorited ? '#333' : 'white', // Dark text for yellow, white for blue
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.85em',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonHoverStyle = {
    backgroundColor: isFavorited ? '#e0a800' : '#0056b3', // Darker on hover
  };

  return (
    <button
      onClick={handleToggleFavorite}
      style={buttonStyle}
      onMouseOver={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
      onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)} // Revert to original on mouse out
    >
      {isFavorited ? '★ Favorited' : '☆ Favorite'}
    </button>
  );
};

export default FavoriteButton;

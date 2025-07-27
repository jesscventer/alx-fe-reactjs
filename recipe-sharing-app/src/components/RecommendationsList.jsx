// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import FavoriteButton from './FavoriteButton';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Generate recommendations when the component mounts or if dependencies change
  useEffect(() => {
        generateRecommendations();
  }, [generateRecommendations]); 

  const containerStyle = {
    marginTop: '40px',
    padding: '20px',
    border: '1px solid #004D40', // Darker border
    borderRadius: '8px',
    backgroundColor: '#B2EBF2', // Medium Teal/Cyan
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '700px',
    margin: '30px auto',
    color: '#263238'
  };

  const recipeCardStyle = {
    border: '1px solid #80DEEA', // Lighter border
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#E0F7FA', // Very light Teal/Cyan for cards
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const recipeInfoStyle = {
    flexGrow: 1,
    cursor: 'pointer',
  };

  const noRecommendationsStyle = {
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic'
  };

  return (
    <div style={containerStyle}>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p style={noRecommendationsStyle}>No recommendations yet. Favorite some recipes!</p>
      ) : (
        recommendations.map(recipe => (
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

export default RecommendationsList;

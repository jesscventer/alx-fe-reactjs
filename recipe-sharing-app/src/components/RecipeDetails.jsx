// src/components/RecipeDetails.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import useRecipeStore from '../components/recipeStore'; // Import the store
import EditRecipeForm from './EditRecipeForm';     // Import the edit form
import DeleteRecipeButton from './DeleteRecipeButton'; // Import the delete button
import FavoriteButton from './FavoriteButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate(); 
  const id = parseInt(recipeId);

    const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === id)
  );

  const [isEditing, setIsEditing] = useState(false); 

  // Handle case where recipe is not found (e.g., direct URL access, deleted recipe)
  if (!recipe) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#dc3545' }}>
        <h2>Recipe Not Found</h2>
        <button
          onClick={() => navigate('/')} // Navigate back to home/list
          style={{
            backgroundColor: '#007bff', color: 'white', border: 'none',
            padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px'
          }}
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  const handleSaveSuccess = () => {
    setIsEditing(false); // Exit edit mode after saving
      };

  const handleDeleteSuccess = () => {
    navigate('/'); // Navigate back to the recipe list after deletion
  };

  const detailsContainerStyle = {
    padding: '40px',
    backgroundColor: '#E0F7FA', // Light Teal/Cyan
    minHeight: '80vh',
    color: '#263238', // Dark Grey text
    maxWidth: '800px',
    margin: '30px auto',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  };

  const buttonGroupStyle = {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  };

  const editButtonStyle = {
    backgroundColor: '#007bff', // Blue
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={detailsContainerStyle}>
      {isEditing ? (
        <EditRecipeForm
          recipe={recipe}
          onSaveSuccess={handleSaveSuccess}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h1 style={{ color: '#004D40', marginBottom: '15px' }}>{recipe.title}</h1>
          <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>{recipe.description}</p>
          <div style={buttonGroupStyle}>
            <button
              onClick={() => setIsEditing(true)}
              style={editButtonStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            >
              Edit Recipe
            </button>
            <FavoriteButton recipeId={recipe.id} />
            <DeleteRecipeButton recipeId={recipe.id} onDeleteSuccess={handleDeleteSuccess} />
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;

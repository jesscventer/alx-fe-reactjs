// src/components/DeleteRecipeButton.jsx
import React from 'react';
import useRecipeStore from '../store/recipeStore'; // Import the store
import { useNavigate } from 'react-router-dom'; // <--- ADD THIS IMPORT

const DeleteRecipeButton = ({ recipeId }) => { // Remove onDeleteSuccess prop, we'll handle navigation internally
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // <--- USE THE HOOK

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      // Navigate back to the home page (recipe list) after successful deletion
      navigate('/'); // <--- ADD THIS LINE FOR NAVIGATION
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        backgroundColor: '#dc3545', // Red
        color: 'white',
        border: 'none',
        padding: '8px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '0.9em',
        transition: 'background-color 0.3s ease',
        marginLeft: '10px'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c82333'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;

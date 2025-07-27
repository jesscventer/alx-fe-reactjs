// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from 'react';
import useRecipeStore from '../store/recipeStore'; // Import the store

const EditRecipeForm = ({ recipe, onSaveSuccess, onCancel }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  // Local state to manage form inputs, initialized with the current recipe data
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  // Use useEffect to update form fields if the 'recipe' prop changes
   useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      alert('Please enter both a title and description for the recipe.');
      return;
    }
    // Call the updateRecipe action from Zustand
    updateRecipe({ ...recipe, title, description });
       if (onSaveSuccess) {
      onSaveSuccess();
    }
  };

  // Inline styles for the form
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '500px',
    margin: '20px auto',
    padding: '25px',
    border: '1px solid #00ACC1',
    borderRadius: '8px',
    backgroundColor: '#E1F5FE',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#263238'
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #B2EBF2',
    borderRadius: '5px',
    fontSize: '1em',
    color: '#263238',
    backgroundColor: '#FFFFFF'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '15px'
  };

  const saveButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#28a745', // Green
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease'
  };

  const cancelButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#6c757d', // Gray
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={inputStyle}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        style={textareaStyle}
        required
      />
      <div style={buttonContainerStyle}>
        <button
          type="button" // Use type="button" to prevent form submission
          onClick={onCancel}
          style={cancelButtonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a6268'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6c757d'}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={saveButtonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;

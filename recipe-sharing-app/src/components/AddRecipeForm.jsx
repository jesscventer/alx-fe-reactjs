// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
// Import your Zustand store.
// Go up one level (from components to src), then into the store folder.
import useRecipeStore from '../components/recipeStore'; // Corrected import path

const AddRecipeForm = () => {
  // Select the 'addRecipe' action from Zustand store
  const addRecipe = useRecipeStore(state => state.addRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      alert('Please enter both a title and description for the recipe.');
      return;
    }
    addRecipe({ id: Date.now(), title, description }); // Generate a unique ID
    setTitle(''); // Clear the input fields after submission
    setDescription('');
  };

  // Inline styles for the form
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '500px',
    margin: '0 auto', // Center the form
    padding: '25px',
    border: '1px solid #00838F', // Dark Cyan border
    borderRadius: '8px',
    backgroundColor: '#E0F7FA', // Light Teal/Cyan background
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#263238'
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #B2EBF2', // Light Blue border
    borderRadius: '5px',
    fontSize: '1em',
    color: '#263238',
    backgroundColor: '#FFFFFF'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '80px',
    resize: 'vertical'
  };

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#006064', // Darker Teal button
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1em',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
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
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#004D40'} // Darker on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#006064'}
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

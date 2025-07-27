// src/store/recipeStore.js
import { create } from 'zustand'; 

const useRecipeStore = create(set => ({
    recipes: [],

// Delete a recipe by its ID
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe] 
  })),

  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore; 


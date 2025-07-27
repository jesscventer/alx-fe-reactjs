// src/store/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({ 
  recipes: [],
  searchTerm: '', 
  filteredRecipes: [], 

  // Add a new recipe
  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    // After adding, re-filter the recipes to keep the filteredResults up to date
    const newFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: newFilteredRecipes
    };
  }),

  // Delete a recipe by its ID
  deleteRecipe: (id) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    // After deleting, re-filter
    const newFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: newFilteredRecipes
    };
  }),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    // After updating, re-filter
    const newFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: newFilteredRecipes
    };
  }),

    setRecipes: (recipes) => set(state => {
        const newFilteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      recipes: recipes,
      filteredRecipes: newFilteredRecipes
    };
  }),

  // Update the search term and immediately trigger filtering
  setSearchTerm: (term) => {
    set({ searchTerm: term }); // First update the search term
    // Now, get the latest state and apply the filter
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },

    filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export default useRecipeStore;

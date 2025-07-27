// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], 
  recommendations: [], 

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    // Re-filter and re-generate recommendations after adding a recipe
    const newFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    // Regenerate recommendations with the new recipe list
    const { recommendations } = get().generateRecommendationsLogic(updatedRecipes, state.favorites); 
    return {
      recipes: updatedRecipes,
      filteredRecipes: newFilteredRecipes,
      recommendations: recommendations
    };
  }),

  // Action to delete a recipe by its ID
  deleteRecipe: (id) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    const updatedFavorites = state.favorites.filter(favId => favId !== id); // Also remove from favorites if deleted
    const newFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    // Regenerate recommendations
    const { recommendations } = get().generateRecommendationsLogic(updatedRecipes, updatedFavorites); 
    return {
      recipes: updatedRecipes,
      favorites: updatedFavorites,
      filteredRecipes: newFilteredRecipes,
      recommendations: recommendations
    };
  }),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    const newFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    // Regenerate recommendations
    const { recommendations } = get().generateRecommendationsLogic(updatedRecipes, state.favorites); 
    return {
      recipes: updatedRecipes,
      filteredRecipes: newFilteredRecipes,
      recommendations: recommendations
    };
  }),

  // Action to set the entire recipes list
  setRecipes: (recipes) => set(state => {
    const newFilteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    // Regenerate recommendations
    const { recommendations } = get().generateRecommendationsLogic(recipes, state.favorites); 
    return {
      recipes: recipes,
      filteredRecipes: newFilteredRecipes,
      recommendations: recommendations
    };
  }),

  // Action to update the search term and immediately trigger filtering
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) { // Prevent duplicates
      const updatedFavorites = [...state.favorites, recipeId];
      const { recipes } = get(); // Get current recipes to pass to logic
      const { recommendations } = get().generateRecommendationsLogic(recipes, updatedFavorites);
      return {
        favorites: updatedFavorites,
        recommendations: recommendations
      };
    }
    return {}; // No state change if already favorited
  }),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => {
    const updatedFavorites = state.favorites.filter(id => id !== recipeId);
    const { recipes } = get(); // Get current recipes to pass to logic
    const { recommendations } = get().generateRecommendationsLogic(recipes, updatedFavorites);
    return {
      favorites: updatedFavorites,
      recommendations: recommendations
    };
  }),

    generateRecommendationsLogic: (allRecipes, currentFavorites) => {
       const recommended = allRecipes.filter(recipe => {
      // Exclude already favorited recipes
      if (currentFavorites.includes(recipe.id)) return false;

           const hasFavoriteKeyword = currentFavorites.some(favId => {
        const favRecipe = allRecipes.find(r => r.id === favId);
        return favRecipe && recipe.title.toLowerCase().includes(favRecipe.title.toLowerCase().split(' ')[0]);
      });

            return hasFavoriteKeyword || Math.random() > 0.7; // Adjust probability as desired
    }).slice(0, 3); // Limit to a few recommendations

    return { recommendations: recommended };
  },

  // Action to trigger recommendation generation 
  generateRecommendations: () => set(state => {
    const { recommendations } = get().generateRecommendationsLogic(state.recipes, state.favorites);
    return { recommendations };
  }),
}));

export default useRecipeStore;

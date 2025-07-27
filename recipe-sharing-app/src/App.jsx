// src/App.jsx
import React from 'react';
// Import routing components
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import the main recipe components
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
// Import the new RecipeDetails component
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; 
import FavoritesList from './components/FavoritesList'; 
import RecommendationsList from './components/RecommendationsList'; 
import useRecipeStore from './components/recipeStore'; 

function App() {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const setRecipes = useRecipeStore(state => state.setRecipes); 

   useEffect(() => {
    const initialMockRecipes = [
      { id: 101, title: 'Spicy Chicken Curry', description: 'A fiery curry with tender chicken pieces.' },
      { id: 102, title: 'Vegetable Lasagna', description: 'Layers of pasta, rich tomato sauce, and fresh vegetables.' },
      { id: 103, title: 'Classic Beef Burger', description: 'Homemade beef patty with all the fixings.' },
      { id: 104, title: 'Fresh Summer Salad', description: 'Light and refreshing salad with seasonal greens.' },
      { id: 105, title: 'Chocolate Chip Cookies', description: 'Chewy cookies loaded with chocolate chips.' },
      { id: 106, title: 'Lentil Soup', description: 'Hearty and nutritious lentil soup, perfect for cold days.' },
      { id: 107, title: 'Grilled Salmon with Asparagus', description: 'Healthy and quick grilled salmon recipe.' },
      { id: 108, title: 'Crispy Fried Chicken', description: 'Southern-style fried chicken with a crunchy coating.' },
    ];
    
    if (useRecipeStore.getState().recipes.length === 0) {
      setRecipes(initialMockRecipes);
    }
        generateRecommendations();
  }, [generateRecommendations, setRecipes]);


function App() {
  const appContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '960px',
    margin: '0 auto',
    backgroundColor: '#F5F5F5',
    minHeight: '100vh',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headerStyle = {
    color: '#004D40',
    fontSize: '2.5em',
    marginBottom: '40px',
    textAlign: 'center',
    textShadow: '1px 1px 2px rgba(0,0,0,0.05)'
  };

  const homeLinkStyle = {
    display: 'block',
    margin: '20px 0',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease'
  };
const activeLinkStyle = {
    backgroundColor: '#0056b3', // Darker blue for active state
  };

  return (
    <Router> {/* Wrap the entire application with Router */}
      <div style={appContainerStyle}>
        <h1 style={headerStyle}>Recipe Sharing App</h1>

        {/* Navigation Links for Home, Favorites, Recommendations */}
        <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <Link to="/" style={linkStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            All Recipes
          </Link>
          <Link to="/favorites" style={linkStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            My Favorites
          </Link>
          <Link to="/recommendations" style={linkStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            Recommendations
          </Link>
        </nav>

        <Routes> {/* Define your routes */}
          {/* Route for the main list and add form */}
          <Route path="/" element={
            <>
            <SearchBar />
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          {/* Route for individual recipe details, with a dynamic ID parameter */}
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          {/* Route for Recommendations list */}
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}
}

export default App;

// src/App.jsx

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Previous task
import WelcomeMessage from './components/WelcomeMessage';

// --- NEW IMPORTS FOR HEADER MAIN CONTENT AND FOOTER TASK ---
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
// ---------------------------------

// Import the new UserProfile component
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Existing WelcomeMessage component */}
      <WelcomeMessage />

      {/* Existing Vite and React logos section */}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> {/* Corrected link to vitejs.dev */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Existing H1 tag */}
      <h1>Vite + React</h1>

      {/* Existing counter card */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Existing "read the docs" paragraph */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* --- NEW COMPONENTS ADDED HERE --- */}
      <Header />
      <MainContent />
      <Footer />
       {/* --- NEW: UserProfile component with props --- */}
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />
      {/* You can add more UserProfile components with different data if you like! */}
      <UserProfile
        name="Bob"
        age={30}
        bio="Software engineer and avid gamer"
      />
      {/* ------------------------------------------- */}
    </>
  );
}

export default App;

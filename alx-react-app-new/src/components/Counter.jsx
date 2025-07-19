// src/components/Counter.jsx
import React, { useState } from 'react'; // Import useState hook

function Counter() {
  // Initialize state using useState.
  // 'count' is the current state value.
  // 'setCount' is the function to update the state.
  // The initial value of count is 0.
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Function to handle resetting the count
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{
      border: '1px solid #007bff', // Blue border
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 123, 255, 0.2)', // Blue shadow
      backgroundColor: '#e6f2ff', // Light blue background
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <h2 style={{ color: '#0056b3' }}>Simple Counter</h2>
      {/* Display the current count */}
      <p style={{ fontSize: '2.5em', fontWeight: 'bold', margin: '15px 0' }}>
        Current Count: {count}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {/* Increment Button */}
        <button
          onClick={handleIncrement}
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            backgroundColor: '#28a745', // Green
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
        >
          Increment
        </button>

        {/* Decrement Button */}
        <button
          onClick={handleDecrement}
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            backgroundColor: '#dc3545', // Red
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c82333'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
        >
          Decrement
        </button>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            backgroundColor: '#6c757d', // Gray
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a6268'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6c757d'}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

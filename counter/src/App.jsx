import React from 'react';

const App = () => {
  const [x, setCount] = React.useState(0);

  function changeCount() {
    setCount(x + 1);
  }

  return (
    <div
      style={{
        textAlign: 'center',
        // marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundImage:
          "url('https://image.slidesdocs.com/responsive-images/background/ample-room-available-on-sleek-wooden-kitchen-countertop-within-minimalist-3d-rendering-of-kitchen-space-powerpoint-background_7b5006c322__960_540.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '95vh', // Ensures it fills the viewport
        // padding: '20px',
      }}
    >
      <h1 style={{marginTop: '20px', color: '#4CAF50', fontSize: '2.5rem' }}>🎉 Hello!! 🎉</h1>
      <h2 style={{ color: '#555', fontSize: '1.8rem' }}>
        Just Click The Button And Watch The Magic! ✨
      </h2>
      <h1 style={{ fontSize: '3rem', color: '#FF5722', margin: '20px 0' }}>{x}</h1>
      <button
        onClick={changeCount}
        style={{
          padding: '10px 20px',
          fontSize: '1.2rem',
          color: '#fff',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
      >
        Click Me 🚀
      </button>
    </div>
  );
};

export default App;

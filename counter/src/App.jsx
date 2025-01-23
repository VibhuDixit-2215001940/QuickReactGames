import React from 'react';

const App = () => {
  const [x, setCount] = React.useState(0);

  function changeCount() {
    setCount(x + 1);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#4CAF50', fontSize: '2.5rem' }}>🎉 Hello!! 🎉</h1>
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

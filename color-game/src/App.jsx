import React, { useState } from 'react';

const App = () => {
  const [gameMode, setGameMode] = useState(null); 
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1Color, setPlayer1Color] = useState('');
  const [player2Color, setPlayer2Color] = useState('');
  const [winner, setWinner] = useState('No Winner Yet!');

  const colors = ['pink', 'green', 'blue'];

  const generateRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const startGame = () => {
    if (gameMode === 'computer') {
      const computerColor = generateRandomColor();
      if (player1Color === computerColor) setWinner(player1Name + ' wins!');
      else setWinner('Computer wins!');
    } else {
      const computerColor = generateRandomColor();
      if (player1Color === computerColor) setWinner(player1Name + ' wins!');
      else if (player2Color === computerColor) setWinner(player2Name + ' wins!');
      else setWinner('No one wins!');
    }
  };

  return (
    <div style={{textAlign: 'center',padding: '20px',backgroundImage: 'linear-gradient(to right, #FF7E5F, #FEB47B)',minHeight: '100vh',color: '#fff',fontFamily: 'Arial, sans-serif'}}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Color Selector Game 🎮</h1>
      {!gameMode && (
        <div style={{ marginTop: '40px' }}>
          <h2>Choose Game Mode</h2>
          <button onClick={() => setGameMode('2player')} style={buttonStyle}>2 Player</button>
          <button onClick={() => setGameMode('computer')} style={buttonStyle}>Play with Computer</button>
        </div>
      )}

      {gameMode === '2player' && (
        <div style={{ marginTop: '40px' }}>
          <h2>Enter Player Names and Choose Colors</h2>
          <div>
            <input type="text" placeholder="Player 1 Name" value={player1Name} onChange={(e) => setPlayer1Name(e.target.value)} style={inputStyle}/>
            <select onChange={(e) => setPlayer1Color(e.target.value)} style={selectStyle}>
              {colors.map((color) => (
                <option value={color} key={color} style={{ backgroundColor: color, color: '#fff' }}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input type="text"placeholder="Player 2 Name"value={player2Name}onChange={(e) => setPlayer2Name(e.target.value)}style={inputStyle}/>
            <select 
              onChange={(e) => setPlayer2Color(e.target.value)} 
              style={selectStyle}
            >
              {colors.map((color) => (
                <option 
                  value={color} 
                  key={color} 
                  style={{ backgroundColor: color, color: '#fff' }}
                >
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {gameMode === 'computer' && (
        <div style={{ marginTop: '40px' }}>
          <h2>Enter Your Name and Choose a Color</h2>
          <div>
            <input type="text" placeholder="Player Name" value={player1Name} onChange={(e) => setPlayer1Name(e.target.value)} style={inputStyle}/>
            <select onChange={(e) => setPlayer1Color(e.target.value)} style={selectStyle}>
              {colors.map((color) => (
                <option value={color} key={color} style={{ backgroundColor: color, color: '#fff' }}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <button onClick={startGame} style={{...buttonStyle, marginTop: '30px', backgroundColor: '#FF5722', padding: '12px 24px'}}>Start Game</button>

      <h2 style={{ marginTop: '30px', fontSize: '2rem' }}>{winner}</h2>
    </div>
  );
};
const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '12px 24px',
  fontSize: '1.2rem',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  margin: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '60%',
};

const selectStyle = {
  padding: '10px',
  fontSize: '1rem',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '60%',
};

export default App;

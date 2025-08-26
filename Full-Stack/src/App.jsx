import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [apiMessage, setApiMessage] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(err => {
      console.error('API request failed:', err);
      setApiMessage('API request failed');
    });
  }, []);

  const handleStartJourney = () => {
    setShowLogin(true);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <>
    <Router>
    
    <div className="topBar"> </div>
    <figure className="bckGif">
      <div className="title">
        <h1><b>Budgetr</b>, the best way to learn finance</h1>
      </div>
    <div className="start">
      <button onClick={handleStartJourney} className="start-btn">Start Your Journey</button>
      {showLogin && <Home onClose={handleClose}/>}
    </div>
    </figure>
      <h2>API Response:</h2>
      <pre>{apiMessage}</pre>
    
    </Router>
    </>
    
  );
}

export default App;
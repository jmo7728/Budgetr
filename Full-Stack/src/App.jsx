import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(err => {
      console.error('API request failed:', err);
      setApiMessage('API request failed');
    });
  }, []);

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
      <h1>Budgetr</h1>
      <p>Full-Stack Application with Vite and React</p>
      <p>This is a full-stack application built with Vite and React. It includes a simple API endpoint that returns a message.</p>
      <p>Click the button below to increment the count and see the API response.</p>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <hr />
      <h2>API Response:</h2>
      <pre>{apiMessage}</pre>
    </>
  );
}

export default App;
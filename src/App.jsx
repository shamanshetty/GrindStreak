import React, { useState, useEffect } from 'react';
import WorkoutLogger from './components/WorkoutLogger';
import ProgressDashboard from './components/ProgressDashboard';
import './App.css';



function App() {
  const [quote, setQuote] = useState('');
  
  // Array of motivational quotes
  const quotes = [
    "The body achieves what the mind believes.",
    "Don't stop when you're tired. Stop when you're done.",
    "Your body can stand almost anything. It's your mind that you have to convince.",
    "The only bad workout is the one that didn't happen.",
    "Success starts with self-discipline.",
    "The harder you work, the better you get."
  ];

  useEffect(() => {
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="app">
      <div className="hero-section">
      <img src="\GSlogo_nobg.png" alt="My App Logo" className="logo" />
        <p className="motivational-quote">"{quote}"</p>
      </div>
      <div className="content-container">
        <WorkoutLogger />
        <ProgressDashboard />
      </div>
    </div>
  );
}

export default App;

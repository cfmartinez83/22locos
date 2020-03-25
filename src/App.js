import React from 'react';
import StayAtHome from './components/stayAtHome';
import Welcome from './components/welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StayAtHome />
        <Welcome />
      </header>
    </div>
  );
}

export default App;

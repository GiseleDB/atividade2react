// src/App.js
import React from 'react';
import './App.css';
import MeuComponente from './MeuComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo à minha aplicação React</h1>
        <MeuComponente />
      </header>
    </div>
  );
}

export default App;

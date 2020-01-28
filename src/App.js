import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Arc-React Project
          Created using:
          - Docker
          - Node.js
          - Git
          - Github
          - Travis-ci
          - AWS Elasticbeanstalk
        </p>
        <a
          className="App-link"
          href="https://github.com/Inferno24/docker-react"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

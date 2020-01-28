import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Arc-React Project<br />
          <br />
          Created using:<br />
          - Docker<br />
          - Node.js<br />
          - Git<br />
          - Github<br />
          - Travis-ci<br />
          - AWS Elasticbeanstalk<br />
          <br />
          <a 
          href="https://github.com/Inferno24/docker-react"><font color="FFFFFF"><b>My GitHub Link</b></font>
          target="_blank"
          </a><br />
        </p>
        <a
          className="App-link"
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

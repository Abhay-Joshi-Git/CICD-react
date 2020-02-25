import React, { Component } from 'react';
import logo from './cicd-logo.jpg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="center">
            <span>some changes for task</span>
          </span>
        </header>
        <div className="App-body">
          some main content
        </div>
      </div>
    );
  }
}

export default App;

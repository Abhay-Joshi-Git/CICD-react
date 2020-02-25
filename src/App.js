import React, { Component } from 'react';
import logo from './cicd-logo.jpg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span class="center">
            <span>Simple react application</span>
          </span>
        </header>
        <div class="App-body">
          some main content
        </div>
      </div>
    );
  }
}

export default App;

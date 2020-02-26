import React, { Component } from 'react';
import logo from './cicd-logo.jpg';
import './App.scss';

var g;
var v;
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="center">
            <span>Simple react application</span>
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

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Stopwatch </h1>
        <Display />
      </div>
    );
  }
}

export default App;

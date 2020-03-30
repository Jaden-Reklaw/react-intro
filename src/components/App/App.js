import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Color from '../Color/Color';

class App extends Component {
  render() {
    let message = 'Hello Dijkstra!!!';
    return (
      <div className="App">
        <Header />
        <p>{message}</p>
        <Color />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import User from './components/User';
import Product from './components/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User type="Student" />
        <Product />
      </div>
    );
  }
}

export default App;

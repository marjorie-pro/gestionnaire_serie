import React,  { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Series from './components/Series';

class App extends Component{

  render() {
    return (
      <div className="App">
        
        <Navbar/>
        
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Schedule from './Schedule';
import Contact from './Contact';
import About from './About';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div><Route path="/schedule" component={Schedule} /></div>
        <div><Route path="/routes" component={Routes} /></div>
        <div><Route path="/about" component={About} /></div>
        <div><Route path="/contact" component={Contact} /></div>
      </div>
    );
  }
}

export default App;

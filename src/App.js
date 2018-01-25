import React, { Component } from 'react';
import Header from './components/header.js';
import List from './components/list.js';
import AddItem from './components/addItem.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddItem />
        <List title="Things to do" className="App-list" />
        <List title="Completed" className="App-list" />
      </div>
    );
  }
}

export default App;

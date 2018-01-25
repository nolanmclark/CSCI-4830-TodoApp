import React from 'react';
import '../App.css';
import Input from './input.js';

class AddItem extends React.Component{
  render() {
    return(
      <div className="addItem-container">
        <Input text="What do you have to do today?" />
      </div>
    );
  }
}

export default AddItem;

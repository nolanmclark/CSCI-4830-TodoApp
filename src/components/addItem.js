import React from 'react';
import '../App.css';
import Input from './input.js';
import List from './list.js';

class AddItem extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.createItem = this.createItem.bind(this);
  }

  createItem(itemName) {
    const items = this.state.items.slice();
    items.push(itemName);
    this.setState({
      items: items
    });
  }


  render() {
    return(
      <div>
        <div className="addItem-container">
          <Input onSubmit={this.createItem} text="What do you have to do today?" />
        </div>
        <List items={this.state.items} title="Things to do" className="App-list" />
      </div>
    );
  }
}

export default AddItem;

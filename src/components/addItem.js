import React from 'react';
import '../App.css';
import Input from './input.js';
import List from './list.js';

class AddItem extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      completed: []
    }
    this.createItem = this.createItem.bind(this);
    this.addToCompleted = this.addToCompleted.bind(this);
  }

  createItem(itemName) {
    const items = this.state.items.slice();
    items.push(itemName);
    this.setState({
      items: items
    });
  }

  addToCompleted(item) {
    const completed = this.state.completed.slice();
    completed.push(item);
    this.setState({
      completed: completed
    });
  }

  render() {
      return(
        <div>
          <div className="addItem-container">
            <Input onSubmit={this.createItem} text="What do you have to do today?" />
          </div>
          <List items={this.state.items} title="Things to do" disabled={false} onSentToCompleted={this.addToCompleted}  className="App-list" />
          <List items={this.state.completed} title="Completed" disabled={true} className="App-list" />
        </div>
      );
  }
}

export default AddItem;

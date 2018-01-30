import React from 'react';
import '../App.css';
const feather = require('feather-icons');

class List extends React.Component {

  constructor(props){
  	super(props);
  	this.state = {
      items: this.props.items,
      completed: []
    };
    this.deleteFromList = this.deleteFromList.bind(this);
  }

  createListFromDb() {
    //TODO: Pull from database to get existing objects,
    // push to list as object. Get completed and things to do.
  }

  deleteFromList(item) {
    let itemsCollection = this.props.items;
    let idx = itemsCollection.indexOf(item);
    let newList = itemsCollection.splice(idx, 1);
    this.setState({items: newList});
    //TODO: Delete item from current list and from database.
  }

  addToCompletedList(item) {
    let itemsCollection = this.props.items;
    let idx = itemsCollection.indexOf(item);
    let newList = itemsCollection.splice(idx, 1);
    let completedCollection = this.state.completed.slice();
    completedCollection.push(item);
    this.props.onSentToCompleted(item);
    this.setState({items: newList, completed: completedCollection});
  }


  render() {
    const listContent = this.props.items;

    const listItems = listContent.map((item) =>
      <li>
          <div class="complete-container">
            <input type="checkbox" disabled={this.props.disabled} checked={this.props.disabled} class="complete-btn" onClick={() => this.addToCompletedList(item)}></input>
          </div>
          {item}
          <div class="delete-container">
            <button class="delete-btn" onClick={() => this.deleteFromList(item)}>Remove</button>
          </div>
      </li>
    );

    return (
      <div className="list-container">
        <h1>{this.props.title}</h1>
        <ul>
          {listItems}
        </ul>
        <script>
          feather.replace()
        </script>
      </div>
    );
  }
}

export default List;

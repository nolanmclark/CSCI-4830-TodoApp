import React from 'react';
import '../App.css';
import firebase from 'firebase';

class List extends React.Component {

  constructor(props){
  	super(props);
  	this.state = {
      items: this.props.items,
      completed: []
    };
    this.deleteFromList = this.deleteFromList.bind(this);
  }

  deleteFromList(item) {
    let db = firebase.firestore();
    let itemsCollection = this.props.items;
    let idx = itemsCollection.indexOf(item);
    let newList = itemsCollection.splice(idx, 1);
    this.setState({items: newList});

    let progressRef = db.collection("inProgress");
    let completedRef = db.collection("completed");
    completedRef.doc(item.id).get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        completedRef.doc(item.id).delete();
      } else {
        progressRef.doc(item.id).delete();
      }
    });
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
          {item.desc}
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

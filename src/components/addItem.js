import React from 'react';
import '../App.css';
import Input from './input.js';
import List from './list.js';
const firebase = require("firebase");
require("firebase/firestore");

class AddItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      completed: []
    }
    this.createItem = this.createItem.bind(this);
    this.addToCompleted = this.addToCompleted.bind(this);

    firebase.initializeApp({
      apiKey: "AIzaSyDb5smxJsPVM8YVNPujYtD6Ra5rjqQ8e7A",
      authDomain: "react-todo-c38ee.firebaseapp.com",
      databaseURL: "https://react-todo-c38ee.firebaseio.com",
      projectId: "react-todo-c38ee",
      storageBucket: "react-todo-c38ee.appspot.com",
      messagingSenderId: "657248265387"
    });
  }

  componentDidMount(){
    this.loadList();
  }

  loadList() {
    let db = firebase.firestore();
    db.collection("inProgress")
    .get().then((query) => {
      query.forEach((doc) => {
        this.setState({
          items: this.state.items.concat(doc.data())
        });
      });
    });

    db.collection("completed")
    .get().then((query) => {
      query.forEach((doc) => {
        this.setState({
          completed: this.state.completed.concat(doc.data())
        });
      });
    });
  }

  createItem(itemName) {
    let db = firebase.firestore();
    let id = Math.random().toString(36).substr(2, 9);
    db.collection("inProgress").doc(id).set({
      id: id,
      desc: itemName
    });
    this.setState({
      items: [],
      completed: []
    });
    this.loadList();
  }

  addToCompleted(item) {
    let db = firebase.firestore();
    db.collection("completed").doc(item.id).set({
      id: item.id,
      desc: item.desc
    });
    db.collection("inProgress").doc(item.id).delete().then(() => {
      this.setState({
        items: [],
        completed: []
      });
      this.loadList();
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

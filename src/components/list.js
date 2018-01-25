import React from 'react';
import '../App.css';

class List extends React.Component {

  constructor(props){
  	super(props);
  	this.state = {
      items: this.props.items
    };
  }

  createListFromDb() {
    //TODO: Pull from database to get existing objects,
    // push to list as object. Get completed and things to do.
  }

  render() {
    const listContent = this.props.items;
    const listItems = listContent.map((item) =>
      <li>{item}</li>
    );

    console.log(this.state.items);

    return (
      <div className="list-container">
        <h1>{this.props.title}</h1>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default List;

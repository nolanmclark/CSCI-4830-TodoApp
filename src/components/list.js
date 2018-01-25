import React from 'react';
import '../App.css';

class List extends React.Component {

  createListFromDb() {
    //TODO: Pull from database to get existing objects,
    // push to list as object. Get completed and things to do.
  }

  render() {
    const listContent = ['Idea', 'Another', 'Again'];
    const listItems = listContent.map((item) =>
      <li>{item}</li>
    );

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

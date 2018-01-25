import React from 'react';
import '../App.css';

class List extends React.Component {

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

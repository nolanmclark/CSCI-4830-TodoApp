import React from 'react';
import '../App.css';

class Header extends React.Component {

  state : {
    time: '00/00/0000'
  }

  componentWillMount() {
    this.getCurrentDate();
  }

  getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if(dd<10) {
      dd='0'+dd;
    }
    if(mm < 10) {
      mm='0'+mm;
    }
    today = mm+'/'+dd+'/'+yyyy;
    this.setState({
      time: today
    })
  }

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">To-Do List</h1>
        <p className="App-title-time">{this.state.time}</p>
      </header>
    );
  }
}

export default Header;

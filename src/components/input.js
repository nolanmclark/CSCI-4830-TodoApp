import React from 'react';
import '../App.css';

class Input extends React.Component{
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.state.value === '') return;
    this.props.onSubmit(this.state.value);
    this.setState({value: ''})
  }

  render() {
    return(
      <form onSubmit={this.onSubmit} id="form" className="formItems">
        <input className="itemInput" type="text"
        placeholder={this.props.text} value={this.state.value}
        onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Input;

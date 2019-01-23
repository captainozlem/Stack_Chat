import React from 'react';
import {connect} from 'react-redux';
import {setName} from '../store';

export class NameEntry extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    //event.preventDefault()
    const {value: name} = event.target;
    this.props.setName(name);
  }
  render() {
    return (
      <form className="form-inline">
        <label htmlFor="name">Your name:</label>
        <input
          onChange={this.handleChange}
          value={this.props.name}
          type="text"
          name="name"
          placeholder="Enter your name"
          className="form-control"
        />
      </form>
    );
  }
}

export default connect(
  state => ({
    name: state.name
  }),
  dispatch => ({
    setName: name => dispatch(setName(name))
  })
)(NameEntry);

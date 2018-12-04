import React, {Component} from 'react';
import {connect} from 'react-redux';
import {writeMessage} from '../store';

const mapStateToProps = state => {
  return {newMessageEntry: state.newMessageEntry};
};

const mapDispatchToProps = dispatch => {
  return {write: () => dispatch(writeMessage())};
};

export class NewMessageEntry extends Component {
  handleChange(event) {
    this.props.write(event.target.value);
  }

  render() {
    return (
      <form id="new-message-form">
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            value={this.props.newMessageEntry}
            onChange={this.handleChange}
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">
              Chat!
            </button>
          </span>
        </div>
      </form>
    );
  }
}

const ConnectNewMessageEntry = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageEntry);
export default ConnectNewMessageEntry;

import React, {Component} from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';

import {connect} from 'react-redux';
import {fetchMessages} from '../store';

const mapToProps = state => {
  return {messages: state.messages};
};
const mapDispatchToProps = dispatch => {
  return {fetchInitialMessages: () => dispatch(fetchMessages())};
};
export class MessagesList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchInitialMessages();
  }

  render() {
    const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
    const messages = this.props.messages;

    const filteredMessages = messages.filter(
      message => message.channelId === channelId
    );

    return (
      <div>
        <ul className="media-list">
          {filteredMessages.map(message => (
            <Message message={message} key={message.id} />
          ))}
        </ul>
        <NewMessageEntry />
      </div>
    );
  }
}
const ConnectedMessagesList = connect(
  mapToProps,
  mapDispatchToProps
)(MessagesList);
export default ConnectedMessagesList;

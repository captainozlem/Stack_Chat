import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, {
  writeMessage,
  postMessage,
  gotMessagesFromServer
} from '../store'

const mapStateToProps = state => {
  return { newMessageEntry: state.newMessageEntry }
}

const mapDispatchToProps = dispatch => {
  return {
    write: txt => dispatch(writeMessage(txt)),
    post: message => {
      dispatch(postMessage(message))
    }
  }
}

export class NewMessageEntry extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.props.write(event.target.value)
  }
  handleSubmit (evt) {
    evt.preventDefault()
    const content = this.props.newMessageEntry

    const channelId = this.props.channelId
    const authorId = 1

    this.props.post({ content, authorId, channelId })
    this.props.newMessageEntry = ''
  }

  render () {
    return (
      <form id='new-message-form' onSubmit={this.handleSubmit}>
        <div className='input-group input-group-lg'>
          <input
            className='form-control'
            type='text'
            name='content'
            value={this.props.newMessageEntry}
            onChange={this.handleChange}
            placeholder='Say something nice...'
          />
          <span className='input-group-btn'>
            <button className='btn btn-default' type='submit'>
              Chat!
            </button>
          </span>
        </div>
      </form>
    )
  }
}

const ConnectNewMessageEntry = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageEntry)
export default ConnectNewMessageEntry

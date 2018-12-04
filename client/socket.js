import io from 'socket.io-client'
import { gotMessagesFromServer } from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('I am now connected to the server!')
  socket.on('new-message', message => {
    state.dispatch(gotMessagesFromServer(message))
  })
})

export default socket

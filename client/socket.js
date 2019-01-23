import io from 'socket.io-client';
import {gotNewMessagesFromServer} from './store';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!');
  socket.on('new-message', message => {
    state.dispatch(gotNewMessagesFromServer(message));
  });
});

//THIS PART IS IMPORTANT FOR UPDATING BOTH SIDES (SOCKET WORKS LIKE WALKIE TALKIE)

export default socket;

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import axios from 'axios';

// initial state
const initialState = {
  messages: [],
  newMessageEntry: ''
};

// action type
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';

// action creator
export const fetchMessages = () => {
  return async dispatch => {
    const response = await axios.get('/api/messages');
    const messages = response.data;
    const action = gotMessagesFromServer(messages);
    dispatch(action);
  };
};

export const writeMessage = inputContent => ({
  type: WRITE_MESSAGE,
  newMessageEntry: inputContent
});
export const gotNewMessagesFromServer = message => ({
  type: GOT_NEW_MESSAGES_FROM_SERVER,
  message
});

export const gotMessagesFromServer = messages => ({
  type: GOT_MESSAGES_FROM_SERVER,
  messages
});

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return {...state, messages: action.messages};
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return {...state, messages: [...state.messages, action.message]};
    case WRITE_MESSAGE:
      return {...state, newMessageEntry: action.newMessageEntry};
    default:
      return state;
  }
};

const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware);

// store
const store = createStore(reducer, middleware);
export default store;

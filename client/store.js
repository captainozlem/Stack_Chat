import {createStore, applyMiddleware} from 'redux';
import trunkMiddleware from 'redux-trunc';

//initial state
const initialState = {
  messages: []
};

// action type
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';

//action creator

export const gotMessagesFromServer = messages => ({
  type: GOT_MESSAGES_FROM_SERVER,
  messages
});

//reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return {...state, messages: action.messages};

    default:
      return state;
  }
};

//store
const store = createStore(reducer, applyMiddleware(trunkMiddleware));
export default store;

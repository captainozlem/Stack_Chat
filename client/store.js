import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Action Types :-)
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER'

// Action Creators
const gotMessagesFromServer = messages => ({
    type: GOT_MESSAGES_FROM_SERVER,
    messages,
})

// Reducer
const initialState = {
    messages: [],
}

// // alternative pattern for writing reducer cases
// const mapTypeToCallback = {
//     [GOT_MESSAGES_FROM_SERVER]: (state, action) => ({
//         ...state,
//         messages: action.messages,
//     }),
// }

// :: (State, Action) -> State
const reducer = (state = initialState, action) => {
    // return mapTypeToCallback[action.type](state, action)
    switch (action.type) {
        case GOT_MESSAGES_FROM_SERVER:
            return { ...state, messages: action.messages }
        default:
            return state
    }
}

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

<<<<<<< HEAD
// so that we can say
// import { Main } from './components';
// instead of
// import { Main } from './components/Main;
export { default as Main } from './Main';
=======
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from '../store'

ReactDOM.render(
  <Provider store={store}>
    <div>Hello</div>
  </Provider>,
  document.getElementById('app')
)
>>>>>>> parent of 6082a95... change text of div

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import apiHandler from './middleware'
import red from './reducer'
import { listQuestions } from './action'
import App from './components/App'

const middle = applyMiddleware(apiHandler);
const store = createStore(red, middle);

store.dispatch(listQuestions());
render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
      ); 



import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Notice that we've organized all of our routes into a separate file.
//import Router from './router';

localStorage.clear();
// Now we can attach the router to the 'root' element like this:
render(<Provider store={}><h1>hi</h1></Provider>, document.getElementById('root'));
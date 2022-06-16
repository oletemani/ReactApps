import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from './rootReducer'
import {applyMiddleware, createStore} from 'redux'
import {logger} from 'redux-logger';
import thunk from 'redux-thunk'

let middleware = [logger,thunk]

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export {store}
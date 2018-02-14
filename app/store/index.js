import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import photos from './photos';


const middleware = applyMiddleware(thunkMiddleware, createLogger());

const reducer = combineReducers({
  photos
});


const store = createStore(reducer, middleware);

export default store;

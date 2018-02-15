import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import photos from './photos';
import searchTerm from './searchTerm';

const middleware = applyMiddleware(thunkMiddleware, createLogger());

const reducer = combineReducers({
  photos,
  searchTerm
});

const store = createStore(reducer, middleware);

export default store;

export * from './photos';
export * from './searchTerm';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import photos from './photos';
import searchTerm from './searchTerm';

const middleware = applyMiddleware(thunkMiddleware);

const reducer = combineReducers({
  photos,
  searchTerm
});

const store = createStore(reducer, middleware);

export default store;

export * from './photos';
export * from './searchTerm';

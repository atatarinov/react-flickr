import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';



function reducer (state = {}, action) {
  return state;
}

const middleware = applyMiddleware(thunkMiddleware, createLogger());

const store = createStore(reducer, middleware);

export default store;

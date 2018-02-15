import { POST_SEARCH_TERM } from './actions';
import { postSearchTerm } from './actionCreators';

// THUNK CREATORS
export const updateSearchTerm = (searchTerm) => function thunk(dispatch) {
  dispatch(postSearchTerm(searchTerm));
};


// STATE
const initialState = {
  searchTerm: ''
};

// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case POST_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };
    default:
      return state;
  }
}

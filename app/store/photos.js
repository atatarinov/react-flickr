import axios from 'axios';
import secrets from '../../secrets';

// ACTION TYPES
const GET_PHOTOS = 'GET_PHOTOS';
const POST_SEARCH_TERM = 'POST_SEARCH_TERM';

// ACTION CREATORS
const getPhotos = photos => ({ type: GET_PHOTOS, photos });
const postSearchTerm = searchTerm => ({ type: POST_SEARCH_TERM, searchTerm });

// THUNK CREATORS
export const updateSearchTerm = (searchTerm) => function thunk(dispatch) {



};




export const fetchPhotos = (tags) => function thunk(dispatch) {
  const apiKey = secrets.apiKey;
  let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=30&format=json&nojsoncallback=1`;
  return axios.get(url)
    .then(res => res.data)
    .then(photos => {
      dispatch(getPhotos(photos));
    });
};

const initialState = {
  photos: [],
  searchTerm: 'cat',
  tags: ''
};

// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, photos: action.photos };
    case POST_SEARCH_TERM:
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    default:
      return state;
  }
}

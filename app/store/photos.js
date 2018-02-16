import axios from 'axios';
import secrets from '../../secrets';
import { GET_PHOTOS } from './actions';
import { getPhotos } from './actionCreators';


// THUNK CREATORS
export const fetchPhotos = (tags) => function thunk(dispatch) {
  const apiKey = process.env.apiKey || secrets.apiKey;
  let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=30&format=json&nojsoncallback=1`;
  return axios.get(url)
    .then(res => res.data)
    .then(photos => {
      dispatch(getPhotos(photos));
    });
};

// STATE
const initialState = {
  photos: []
};

// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return action.photos;
    default:
      return state;
  }
}

import { GET_PHOTOS, POST_SEARCH_TERM } from './actions';

// ACTION CREATORS
export const getPhotos = photos => ({ type: GET_PHOTOS, photos });
export const postSearchTerm = searchTerm => ({ type: POST_SEARCH_TERM, searchTerm });

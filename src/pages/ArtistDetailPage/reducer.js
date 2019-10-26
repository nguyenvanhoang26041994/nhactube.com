import { artistConstants } from './constants';

const initialState = {
  isFetching: false,
  isErrors: false,
  isSuccess: false,
  artist: {
    id: '',
    name: '',
  },
};

export default (state = initialState, action) => {
  switch(action.type) {
    // ARTIST
    case artistConstants.GET_ARTIST_DETAIL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isErrors: false,
        isSuccess: false,
      };
    case artistConstants.GET_ARTIST_DETAIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        isErrors: true,
        isSuccess: false,
      };
    case artistConstants.GET_ARTIST_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isErrors: false,
        isSuccess: true,
        artist: {
          ...state.artist,
          id: action.payload.id,
          name: action.payload.name,
        },
      };
    default:
      return state;
  }
};

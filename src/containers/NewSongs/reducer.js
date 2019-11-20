import { newSongsConstants } from './constants'
const initialState = {
  isFetching: false,
  isError: false,
  isSuccess: false,
  isFetched: false,

  playlist: {
    id: 'new-songs',
    name: 'Bài Hát Mới',
    songs: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    // NEW SONGS
    case newSongsConstants.GET_NEW_SONGS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        isSuccess: false,
      };

    case newSongsConstants.GET_NEW_SONGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        isSuccess: false,
      };

    case newSongsConstants.GET_NEW_SONGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        isSuccess: true,
        isFetched: true,
        playlist: {
          ...state.playlist,
          songs: action.payload,
        },
      };

    default:
      return state;
  }
};

import { playlistConstants } from './constants';

const initialState = {
  isFetching: false,
  isErrors: false,
  isSuccess: false,
  playlist: {
    id: '',
    name: '',
    songs: [],
  },
};

export default (state = initialState, action) => {
  switch(action.type) {
    // PLAYLIST
    case playlistConstants.GET_PLAYLIST_DETAIL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isErrors: false,
        isSuccess: false,
      };
    case playlistConstants.GET_PLAYLIST_DETAIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        isErrors: true,
        isSuccess: false,
      };
    case playlistConstants.GET_PLAYLIST_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isErrors: false,
        isSuccess: true,
        playlist: {
          ...state.song,
          id: action.payload.id,
          name: action.payload.name,
          songs: action.payload.songs || [],
        },
      };
    default:
      return state;
  }
};

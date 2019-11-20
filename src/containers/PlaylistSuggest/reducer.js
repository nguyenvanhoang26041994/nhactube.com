import { playlistSuggestConstants } from './constants'
const initialState = {
  isFetching: false,
  isError: false,
  isSuccess: false,
  isFetched: false,

  playlists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // BXH
    case playlistSuggestConstants.GET_PLAYLIST_SUGGEST_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        isSuccess: false,
      };

    case playlistSuggestConstants.GET_PLAYLIST_SUGGEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        isSuccess: false,
      };

    case playlistSuggestConstants.GET_PLAYLIST_SUGGEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        isSuccess: true,
        isFetched: true,
        playlists: action.payload,
      };

    default:
      return state;
  }
};

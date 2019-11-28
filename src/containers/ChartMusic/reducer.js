import { chartMusicConstants } from './constants'
const initialState = {
  isFetching: false,
  isError: false,
  isSuccess: false,
  isFetched: false,

  playlist: {
    songs: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    // BXH
    case chartMusicConstants.GET_BXH_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        isSuccess: false,
      };

    case chartMusicConstants.GET_BXH_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        isSuccess: false,
      };

    case chartMusicConstants.GET_BXH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        isSuccess: true,
        isFetched: true,
        playlist: {
          ...action.payload,
          songs: action.payload.songs || [],
        },
      };

    default:
      return state;
  }
};

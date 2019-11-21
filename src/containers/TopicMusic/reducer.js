import { topicMusicConstants } from './constants'
const initialState = {
  isFetching: false,
  isError: false,
  isSuccess: false,
  isFetched: false,

  playlists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // TOPIC
    case topicMusicConstants.GET_TOPIC_MUSIC_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        isSuccess: false,
      };

    case topicMusicConstants.GET_TOPIC_MUSIC_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        isSuccess: false,
      };

    case topicMusicConstants.GET_TOPIC_MUSIC_SUCCESS:
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

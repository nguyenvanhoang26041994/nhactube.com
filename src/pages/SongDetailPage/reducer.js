import { songConstants, lyricConstants } from './constants';

const initialState = {
  isFetching: false,
  isErrors: false,
  isSuccess: false,
  song: {
    id: '',
    name: '',
    artists: [],
    views: 0,
    downloaded: 0,
    shared: 0,
    release: '',
    lyric: [],
  },

  isLyricFetching:false,
  isLyricErrors:false,
  isLyricSuccess:false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    // SONG
    case songConstants.GET_SONG_DETAIL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isErrors: false,
        isSuccess: false,
      };
    case songConstants.GET_SONG_DETAIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        isErrors: true,
        isSuccess: false,
      };
    case songConstants.GET_SONG_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isErrors: false,
        isSuccess: true,
        song: {
          ...state.song,
          id: action.payload.id,
          name: action.payload.name,
          artists: action.payload.artists || [],
          release: action.payload.release,
        },
      };

    // LYRIC
    case lyricConstants.GET_LYRIC_DETAIL_REQUEST:
      return {
        ...state,
        isLyricFetching: true,
        isLyricErrors: false,
        isLyricSuccess: false,
      };
    case lyricConstants.GET_LYRIC_DETAIL_FAILURE:
      return {
        ...state,
        isLyricFetching: false,
        isLyricErrors: true,
        isLyricSuccess: false,
      };
    case lyricConstants.GET_LYRIC_DETAIL_SUCCESS:
      return {
        ...state,
        isLyricFetching: false,
        isLyricErrors: false,
        isLyricSuccess: true,
        song: {
          ...state.song,
          lyric: action.payload || [],
        },
      };
    default:
      return state;
  }
};

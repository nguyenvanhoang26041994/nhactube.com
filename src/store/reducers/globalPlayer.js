import { mode, globalPlayer } from '../constants';

const initialState = {
  mode: mode.REPEAT,

  isLyricFetching: false,
  isLyricError: false,
  isLyricSuccess: false,

  song: {
    id: '',
    name: '',
    artists: [],
    views: 0,
    dowloaded: 0,
    shared: 0,
    release: '',
    lyric: [],
    isPlaying: false,
  },

  playlist: {
    id: '',
    name: '',
    songs: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    // MODE
    case globalPlayer.CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case globalPlayer.CHANGE_SONG:
      return {
        ...state,
        song: {
          ...state.song,
          id: action.payload.id,
          name: action.payload.name,
          artists: action.payload.artists || [],
          release: action.payload.release,
        },
      };
    case globalPlayer.CHANGE_IS_PLAYING:
      return {
        ...state,
        song: {
          ...state.song,
          isPlaying: action.payload,
        },
      };
    case globalPlayer.CHANGE_PLAYLIST:
      return {
        ...state,
        playlist: {
          ...state.playlist,
          id: action.payload.id,
          name: action.payload.name,
          songs: action.payload.songs || [],
        },
      };

    // LYRIC
    case globalPlayer.GET_LYRIC_REQUEST:
      return {
        ...state,
        isLyricsFetching: true,
        isLyricsError: false,
        isLyricsSuccess: false,
      };
    case globalPlayer.GET_LYRIC_FAILURE:
      return {
        ...state,
        isLyricFetching: false,
        isLyricError: true,
        isLyricSuccess: false,
      };
    case globalPlayer.GET_LYRIC_SUCCESS:
      return {
        ...state,
        song: {
          ...state.song,
          lyric: action.payload || [],
        },
        isLyricFetching: false,
        isLyricError: false,
        isLyricSuccess: true,
      };
    default:
      return state;
  }
};

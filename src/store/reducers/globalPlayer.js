import { mode, globalPlayer } from '../constants';

const initialState = {
  mode: mode.REPEAT,

  isLyricsFetching: false,
  isLyricsError: false,
  isLyricsSuccess: false,
  music: {
    id: '',
    link: '',
    url: '',
    avatarUrl: '',
    name: '',
    channel: {},
    views: 0,
    dowloaded: 0,
    shared: 0,
    release: '',
    lyrics: [],
    isPlaying: false,
  },

  isMusicsFetching: false,
  isMusicsError: false,
  isMusicsSuccess: false,
  musics: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // MODE
    case globalPlayer.CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case globalPlayer.CHANGE_MUSIC:
      return {
        ...state,
        music: {
          ...state.music,
          id: action.payload.id,
          link: action.payload.link,
          url: action.payload.url,
          avatarUrl: action.payload.avatarUrl,
          name: action.payload.name,
          channel: action.payload.channel || {},
          release: action.payload.release,
        },
      };
    case globalPlayer.CHANGE_IS_PLAYING:
      return {
        ...state,
        music: {
          ...state.music,
          isPlaying: action.payload,
        },
      };
    case globalPlayer.CHANGE_MUSICS:
      return {
        ...state,
        musics: action.payload || [],
      };

    // LYRICS
    case globalPlayer.GET_LYRICS_REQUEST:
      return {
        ...state,
        isLyricsFetching: true,
        isLyricsError: false,
        isLyricsSuccess: false,
      };
    case globalPlayer.GET_LYRICS_FAILURE:
      return {
        ...state,
        isLyricsFetching: false,
        isLyricsError: true,
        isLyricsSuccess: false,
      };
    case globalPlayer.GET_LYRICS_SUCCESS:
      return {
        ...state,
        music: {
          ...state.music,
          lyrics: action.payload || [],
        },
        isLyricsFetching: false,
        isLyricsError: false,
        isLyricsSuccess: true,
      };

    // MUSICS
    case globalPlayer.GET_MUSICS_REQUEST:
      return {
        ...state,
        isMusicsFetching: true,
        isMusicsError: false,
        isMusicsSuccess: false,
      };
    case globalPlayer.GET_MUSICS_FAILURE:
      return {
        ...state,
        isMusicsFetching: false,
        isMusicsError: true,
        isMusicsSuccess: false,
      };
    case globalPlayer.GET_MUSICS_SUCCESS:
      return {
        ...state,
        musics: action.payload || [],
        isMusicsFetching: false,
        isMusicsError: false,
        isMusicsSuccess: true,
      };
    default:
      return state;
  }
};

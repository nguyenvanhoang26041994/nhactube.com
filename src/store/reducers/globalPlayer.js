import { mode, globalPlayer } from '../constants';

const initialState = {
  mode: mode.REPEAT,
  music: {
    id: '',
    link: '',
    url: '',
    avatarUrl: '',
    name: '',
    channel: {},
    views: 0,
    lyrics: [],
    isPlaying: false,
  },
  musics: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
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
          views: action.payload.views || 0,
          lyrics: action.payload.lyrics || [],
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
        musics: action.payload,
      };
    default:
      return state;
  }
};

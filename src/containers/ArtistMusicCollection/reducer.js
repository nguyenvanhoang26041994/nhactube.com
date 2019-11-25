import { artistMusicCollectionConstants } from './constants'
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
    case artistMusicCollectionConstants.GET_ARTIST_MUSIC_COLECTION_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        isSuccess: false,
      };

    case artistMusicCollectionConstants.GET_ARTIST_MUSIC_COLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        isSuccess: false,
      };

    case artistMusicCollectionConstants.GET_ARTIST_MUSIC_COLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        isSuccess: true,
        isFetched: true,
        playlists: action.payload.map(playlist => ({
          ...playlist,
          songs: playlist.songs || [],
        })),
      };

    // FETCH SONG FOR PLAYLIST
    case artistMusicCollectionConstants.GET_MUSIC_FOR_ARTIST_SUCCESS:
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (action.payload.id === playlist.id) {
            return {
              ...playlist,
              songs: action.payload.songs,
            };
          }
          return playlist;
        }),
      };

    default:
      return state;
  }
};

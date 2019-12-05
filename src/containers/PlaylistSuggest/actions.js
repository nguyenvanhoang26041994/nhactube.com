import { playlistSuggestConstants } from './constants';

// NEW SONGS
export const fetchPlaylistSuggestRequest = () => ({
  type: playlistSuggestConstants.GET_PLAYLIST_SUGGEST_REQUEST,
});

export const fetchPlaylistSuggestFailure = () => ({
  type: playlistSuggestConstants.GET_PLAYLIST_SUGGEST_FAILURE,
});

export const fetchPlaylistSuggestSuccess = (playlists) => ({
  type: playlistSuggestConstants.GET_PLAYLIST_SUGGEST_SUCCESS,
  payload: playlists,
});

export const fetchPlaylistSuggest = () => async (dispatch) => {
  dispatch(fetchPlaylistSuggestRequest());
  try {
    const { data } = await fetch('https://www.nhactube.com/api/stuff/maybe-you-love-them').then(res => res.json());
    dispatch(fetchPlaylistSuggestSuccess(data.chain));
    return data;
  } catch(e) {
    dispatch(fetchPlaylistSuggestFailure());
  }
}

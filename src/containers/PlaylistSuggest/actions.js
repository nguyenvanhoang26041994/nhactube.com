import { playlistSuggestConstants } from './constants';
import api from '../../config/api';

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
    const { data } = await fetch(api.main.stuff.maybeYouLoveThem).then(res => res.json());
    dispatch(fetchPlaylistSuggestSuccess(data.chain));
    return data;
  } catch(e) {
    dispatch(fetchPlaylistSuggestFailure());
  }
}

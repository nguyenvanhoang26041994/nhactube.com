import { playlistConstants } from './constants';
import api from '../../config/api';

// PLAYLIST DETAIL
export const fetchPlaylistRequest = () => ({
  type: playlistConstants.GET_PLAYLIST_DETAIL_REQUEST,
});

export const fetchPlaylistFailure = () => ({
  type: playlistConstants.GET_PLAYLIST_DETAIL_FAILURE,
});

export const fetchPlaylistSuccess = (playlist) => ({
  type: playlistConstants.GET_PLAYLIST_DETAIL_SUCCESS,
  payload: playlist,
});

export const fetchPlaylist = (id) => async (dispatch) => {
  dispatch(fetchPlaylistRequest());
  try {
    const { data } = await fetch(api.main.playlists.main(id)).then(res => res.json());
    dispatch(fetchPlaylistSuccess(data));
    return data;
  } catch(e) {
    dispatch(fetchPlaylistFailure());
  }
}

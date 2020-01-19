import { globalPlayer } from '../constants';
import api from '../../config/api';

// MODE
export const changeMode = mode => ({
  type: globalPlayer.CHANGE_MODE,
  payload: mode,
});

// LYRICS
export const fetchLyricRequest = () => ({
  type: globalPlayer.GET_LYRIC_REQUEST,
});

export const fetchLyricFailure = () => ({
  type: globalPlayer.GET_LYRIC_FAILURE,
});

export const fetchLyricSuccess = lyric => ({
  type: globalPlayer.GET_LYRIC_SUCCESS,
  payload: lyric,
});

export const fetchLyric = songId => async (dispatch) => {
  dispatch(fetchLyricRequest());

  try {
    const data = await fetch(api.main.lyrics.main(songId)).then(res => res.json());
    dispatch(fetchLyricSuccess(data.data));
    return data.data;
  } catch(e) {
    dispatch(fetchLyricFailure());
  }
}

// SONG
export const changeSong = song => (dispatch) => {
  dispatch({
    type: globalPlayer.CHANGE_SONG,
    payload: song,
  });
  dispatch(fetchLyric(song.id));
};

export const changeIsPlaying = isPlaying => ({
  type: globalPlayer.CHANGE_IS_PLAYING,
  payload: isPlaying,
});

export const changePlaylist = playlist => ({
  type: globalPlayer.CHANGE_PLAYLIST,
  payload: playlist,
});

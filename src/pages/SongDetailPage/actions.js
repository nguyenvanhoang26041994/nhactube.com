import { songConstants, lyricConstants } from './constants';
import api from '../../config/api';

// LYRICS
export const fetchLyricRequest = () => ({
  type: lyricConstants.GET_LYRIC_DETAIL_REQUEST,
});

export const fetchLyricFailure = () => ({
  type: lyricConstants.GET_LYRIC_DETAIL_FAILURE,
});

export const fetchLyricSuccess = lyric => ({
  type: lyricConstants.GET_LYRIC_DETAIL_SUCCESS,
  payload: lyric,
});

export const fetchLyric = (id) => async (dispatch) => {
  dispatch(fetchLyricRequest());

  try {
    const { data } = await fetch(api.main.lyrics.main(id)).then(res => res.json());
    dispatch(fetchLyricSuccess(data));
    return data;
  } catch(e) {
    dispatch(fetchLyricFailure());
  }
}

// SONG DETAIL
export const fetchSongRequest = () => ({
  type: songConstants.GET_SONG_DETAIL_REQUEST,
});

export const fetchSongFailure = () => ({
  type: songConstants.GET_SONG_DETAIL_FAILURE,
});

export const fetchSongSuccess = (song) => ({
  type: songConstants.GET_SONG_DETAIL_SUCCESS,
  payload: song,
});

export const fetchSong = (id) => async (dispatch) => {
  dispatch(fetchSongRequest());
  try {
    const { data } = await fetch(api.main.songs.main(id)).then(res => res.json());
    dispatch(fetchLyric(id));
    dispatch(fetchSongSuccess(data));
    return data;
  } catch(e) {
    dispatch(fetchSongFailure());
  }
}

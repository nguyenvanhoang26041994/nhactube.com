import { songConstants, lyricConstants } from './constants';

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
    const { data } = await fetch(`https://www.nhactube.com/api/lyrics/${id}`).then(res => res.json());
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
    const { data } = await fetch(`https://www.nhactube.com/api/songs/${id}`).then(res => res.json());
    dispatch(fetchLyric(id));
    dispatch(fetchSongSuccess(data));
    return data;
  } catch(e) {
    dispatch(fetchSongFailure());
  }
}

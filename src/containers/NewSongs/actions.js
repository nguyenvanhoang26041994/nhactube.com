import { newSongsConstants } from './constants';

// NEW SONGS
export const fetchNewSongsRequest = () => ({
  type: newSongsConstants.GET_NEW_SONGS_REQUEST,
});

export const fetchNewSongsFailure = () => ({
  type: newSongsConstants.GET_NEW_SONGS_FAILURE,
});

export const fetchNewSongsSuccess = (songs) => ({
  type: newSongsConstants.GET_NEW_SONGS_SUCCESS,
  payload: songs,
});

export const fetchNewSongs = () => async (dispatch) => {
  dispatch(fetchNewSongsRequest());
  try {
    const { data } = await fetch('https://www.nhactube.com/api/songs/new').then(res => res.json());
    dispatch(fetchNewSongsSuccess(data));
    return data;
  } catch(e) {
    dispatch(fetchNewSongsFailure());
  }
}

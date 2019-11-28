import { chartMusicConstants } from './constants';

// NEW SONGS
export const fetchBXHRequest = () => ({
  type: chartMusicConstants.GET_BXH_REQUEST,
});

export const fetchBXHFailure = () => ({
  type: chartMusicConstants.GET_BXH_FAILURE,
});

export const fetchBXHSuccess = (playlist) => ({
  type: chartMusicConstants.GET_BXH_SUCCESS,
  payload: playlist,
});

export const fetchBXH = () => async (dispatch) => {
  dispatch(fetchBXHRequest());
  try {
    const { data } = await fetch('https://www.nhactube.com/api/top/vietnam_48th_2019').then(res => res.json());
    dispatch(fetchBXHSuccess(data));
    return data;
  } catch(e) {
    dispatch(fetchBXHFailure());
  }
}

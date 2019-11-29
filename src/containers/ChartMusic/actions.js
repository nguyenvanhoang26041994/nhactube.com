import { chartMusicConstants } from './constants';

export const fetchBXHVietNamRequest = () => ({
  type: chartMusicConstants.GET_BXH_VIETNAM_REQUEST,
});

export const fetchBXHVietNamFailure = () => ({
  type: chartMusicConstants.GET_BXH_VIETNAM_FAILURE,
});

export const fetchBXHVietNamSuccess = (playlist) => ({
  type: chartMusicConstants.GET_BXH_VIETNAM_SUCCESS,
  payload: playlist,
});

export const fetchBXHVietNam = () => async (dispatch) => {
  dispatch(fetchBXHVietNamRequest());
  try {
    const { data } = await fetch('https://www.nhactube.com/api/top/vietnam_48th_2019').then(res => res.json());
    dispatch(fetchBXHVietNamSuccess(data));
    return data;
  } catch(e) {
    dispatch(fetchBXHVietNamFailure());
  }
}

export const fetchBXHUSUKRequest = () => ({
  type: chartMusicConstants.GET_BXH_USUK_REQUEST,
});

export const fetchBXHUSUKFailure = () => ({
  type: chartMusicConstants.GET_BXH_USUK_FAILURE,
});

export const fetchBXHUSUKSuccess = (playlist) => ({
  type: chartMusicConstants.GET_BXH_USUK_SUCCESS,
  payload: playlist,
});

export const fetchBXHUSUK = () => async (dispatch) => {
  dispatch(fetchBXHUSUKRequest());
  try {
    const { data } = await fetch('https://www.nhactube.com/api/top/usuk_48th_2019').then(res => res.json());
    dispatch(fetchBXHUSUKSuccess(data));
    return data;
  } catch(e) {
    dispatch(fetchBXHUSUKFailure());
  }
}

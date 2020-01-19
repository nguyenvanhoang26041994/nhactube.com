import { mainConstants } from './constants';
import api from '../../config/api';

export const fetchDataRequest = () => ({
  type: mainConstants.GET_DATA_REQUEST,
});

export const fetchDataFailure = () => ({
  type: mainConstants.GET_DATA_FAILURE,
});

export const fetchDataSuccess = (list) => ({
  type: mainConstants.GET_DATA_SUCCESS,
  payload: list,
});

export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const { data } = await fetch(api.main.stuff.massiveHeaderSlider).then(res => res.json());
    dispatch(fetchDataSuccess(data.chain));
    return data;
  } catch(e) {
    dispatch(fetchDataFailure());
  }
}

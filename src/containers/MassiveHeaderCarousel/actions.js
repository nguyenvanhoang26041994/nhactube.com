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

// export const fetchData = () => async (dispatch) => {
//   dispatch(fetchDataRequest());
//   try {
//     const { data } = await fetch(api.main.stuff.massiveHeaderSlider).then(res => res.json());
//     dispatch(fetchDataSuccess(data.chain));
//     return data;
//   } catch(e) {
//     dispatch(fetchDataFailure());
//   }
// }

export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  const data = [
    {
      avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com/o/images%2Fstuff%2Fhan.jpg?alt=media',
      link: '/song/uncover'
    },
    {
      avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com/o/images%2Fstuff%2Fhoa-tau.jpg?alt=media',
      link: '/playlist/nhac-viet-cho-buoi-sang'
    },
    {
      avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com/o/images%2Fstuff%2Fhoa.jpg?alt=media',
      link: '/song/chac-ai-do-se-ve'
    },
    {
      avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com/o/images%2Fstuff%2Fnhacphim.jpg?alt=media',
      link: '/song/bac-phan'
    },
    {
      avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com/o/images%2Fstuff%2Fnhacsi.jpg?alt=media',
      link: '/song/song-gio'
    },
    {
      avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com/o/images%2Fstuff%2Fpiano.jpg?alt=media',
      link: '/song/sao-em-vo-tinh'
    },
    {
      avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com/o/images%2Fstuff%2Frap.jpg?alt=media',
      link: '/song/ai-cho-ai'
    },
  ];
  dispatch(fetchDataSuccess(data));
  return data;
}

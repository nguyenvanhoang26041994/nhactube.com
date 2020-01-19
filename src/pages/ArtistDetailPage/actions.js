import { artistConstants } from './constants';
import api from '../../config/api';

// SONG DETAIL
export const fetchArtistRequest = () => ({
  type: artistConstants.GET_ARTIST_DETAIL_REQUEST,
});

export const fetchArtistFailure = () => ({
  type: artistConstants.GET_ARTIST_DETAIL_FAILURE,
});

export const fetchArtistSuccess = (artist) => ({
  type: artistConstants.GET_ARTIST_DETAIL_SUCCESS,
  payload: artist,
});

export const fetchArtist = (id) => async (dispatch) => {
  dispatch(fetchArtistRequest());
  try {
    const { data } = await fetch(api.main.artists.main(id)).then(res => res.json());
    dispatch(fetchArtistSuccess(data));
    return data;
  } catch(e) {
    dispatch(fetchArtistFailure());
  }
}

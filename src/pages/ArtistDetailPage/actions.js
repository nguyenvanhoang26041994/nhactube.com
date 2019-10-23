import { artistConstants } from './constants';

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
    const { data } = await fetch(`https://www.nhactube.com/api/artists/${id}`).then(res => res.json());
    dispatch(fetchArtistSuccess(data));
    return data;
  } catch(e) {
    dispatch(fetchArtistFailure());
  }
}

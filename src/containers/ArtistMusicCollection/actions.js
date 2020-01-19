import { artistMusicCollectionConstants } from './constants';
import api from '../../config/api';

// ARTIST MUSIC COLLECTION
export const fetchArtistMusicCollectionRequest = () => ({
  type: artistMusicCollectionConstants.GET_ARTIST_MUSIC_COLECTION_REQUEST,
});

export const fetchArtistMusicCollectionFailure = () => ({
  type: artistMusicCollectionConstants.GET_ARTIST_MUSIC_COLECTION_FAILURE,
});

export const fetchArtistMusicCollectionSuccess = (playlists) => ({
  type: artistMusicCollectionConstants.GET_ARTIST_MUSIC_COLECTION_SUCCESS,
  payload: playlists,
});

export const fetchArtistMusicCollection = () => async (dispatch) => {
  dispatch(fetchArtistMusicCollectionRequest());
  try {
    const { data } = await fetch(`https://us-central1-nhactube.cloudfunctions.net/api/api/playlists/${'best-of-ed-sheeran'}`).then(res => res.json());
    dispatch(fetchArtistMusicCollectionSuccess([data]));
    return data;
  } catch(e) {
    dispatch(fetchArtistMusicCollectionFailure());
  }
}

// MUSIC FOR ARTIST
export const fetchMusicForArtistRequest = () => ({
  type: artistMusicCollectionConstants.GET_MUSIC_FOR_ARTIST_REQUEST,
});

export const fetchMusicForArtistFailure = () => ({
  type: artistMusicCollectionConstants.GET_MUSIC_FOR_ARTIST_FAILURE,
});

export const fetchMusicForArtistSuccess = (artistId, songs) => ({
  type: artistMusicCollectionConstants.GET_MUSIC_FOR_ARTIST_SUCCESS,
  payload: {
    id: artistId,
    songs,
  },
});

export const fetchMusicForArtist = (artistId) => async (dispatch) => {
  dispatch(fetchMusicForArtistRequest());
  try {
    const { data } = await fetch(api.main.playlists.artist(artistId)).then(res => res.json());
    dispatch(fetchMusicForArtistSuccess(artistId, data.songs));
    return data;
  } catch(e) {
    dispatch(fetchMusicForArtistFailure());
  }
}

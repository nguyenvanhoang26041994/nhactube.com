import { globalPlayer } from '../constants';

// MODE
export const changeMode = mode => ({
  type: globalPlayer.CHANGE_MODE,
  payload: mode,
});

// LYRICS
export const fetchLyricsRequest = () => ({
  type: globalPlayer.GET_LYRICS_REQUEST,
});

export const fetchLyricsFailure = () => ({
  type: globalPlayer.GET_LYRICS_FAILURE,
});

export const fetchLyricsSuccess = lyrics => ({
  type: globalPlayer.GET_LYRICS_SUCCESS,
  payload: lyrics,
});

export const fetchLyrics = musicId => async (dispatch) => {
  dispatch(fetchLyricsRequest());

  try {
    const data = await fetch(`https://www.nhactube.com/api/lyrics/${musicId}`).then(res => res.json());
    dispatch(fetchLyricsSuccess(data.data));
  } catch(e) {
    dispatch(fetchLyricsFailure());
  }
}

// MUSIC
export const changeMusic = music => (dispatch) => {
  dispatch({
    type: globalPlayer.CHANGE_MUSIC,
    payload: music,
  });
  dispatch(fetchLyrics(music.id));
};

export const changeIsPlaying = isPlaying => ({
  type: globalPlayer.CHANGE_IS_PLAYING,
  payload: isPlaying,
});

export const changeMusics = musics => ({
  type: globalPlayer.CHANGE_MUSICS,
  payload: musics,
});

// MUSICS
export const fetchMusicsRequest = () => ({
  type: globalPlayer.GET_MUSICS_REQUEST,
});

export const fetchMusicsFailure = () => ({
  type: globalPlayer.GET_MUSICS_FAILURE,
});

export const fetchMusicsSuccess = musics => ({
  type: globalPlayer.GET_MUSICS_SUCCESS,
  payload: musics,
});

export const fetchMusics = groupId => async (dispatch) => {
  dispatch(fetchMusicsRequest());

  try {
    const data = await fetch(`https://www.nhactube.com/api/group-musics/${groupId}`).then(res => res.json());
    dispatch(fetchMusicsSuccess(data.musics));
  } catch(e) {
    dispatch(fetchMusicsFailure());
  }
}

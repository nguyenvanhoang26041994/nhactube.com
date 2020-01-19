const MAIN = 'https://us-central1-nhactube.cloudfunctions.net/api';

export default {
  main: {
    stuff: {
      massiveHeaderSlider: `${MAIN}/api/stuff/massive-header-slider`,
      maybeYouLoveThem: `${MAIN}/api/stuff/maybe-you-love-them`,
      hotTopic: `${MAIN}/api/stuff/hot-topic`,
    },
    top: {
      vietnam: `${MAIN}/api/top/vietnam_48th_2019`,
      usuk: `${MAIN}/api/top/usuk_48th_2019`,
    },
    songs: {
      new: `${MAIN}/api/songs/new`,
      main: id => `${MAIN}/api/songs/${id}`,
    },
    playlists: {
      main: id => `${MAIN}/api/playlists/${id}`,
      artist: artistId => `${MAIN}/api/playlists/${artistId}`,
    },
    artists: {
      main: id => `${MAIN}/api/artists/${id}`,
    },
    lyrics: {
      main: id => `${MAIN}/api/lyrics/${id}`,
    },
  },
};

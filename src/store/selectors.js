import { createSelector } from 'reselect';

const storageUri = 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com';

export const themeSelector = state => state.theme;
export const globalPlayerSelector = state => state.globalPlayer;
export const artistSelector = artist => ({
  ...artist,
  avatarUrl: artist.id ? `${storageUri}/o/images%2Fartists%2F${artist.id}?alt=media` : '',
});
export const songSelector = song => ({
  ...song,
  url: song.id ? `${storageUri}/o/songs%2F${song.id}.mp3?alt=media` : '',
  avatarUrl: song.id ? `${storageUri}/o/images%2Fsongs%2F${song.id}?alt=media` : '',
  artistsName: song.artists.map(artist => artist.name).join(', '),
  artists: song.artists.map(artist => artistSelector(artist)),
});

export const playlistSelector = playlist => ({
  ...playlist,
  avatarUrl: playlist.id ? `${storageUri}/o/images%2Fplaylists%2F${playlist.id}.jpg?alt=media` : '',
});

export const globalPlayerModeSelector = createSelector(
  globalPlayerSelector,
  globalPlayer => globalPlayer.mode,
);

export const globalPlayerSongSelector = createSelector(
  globalPlayerSelector,
  globalPlayer => songSelector(globalPlayer.song),
);

export const globalPlayerPlaylistSelector = createSelector(
  globalPlayerSelector,
  globalPlayer => ({
    ...globalPlayer.playlist,
    songs: globalPlayer.playlist.songs.map(song => ({
      isPlaying: globalPlayer.song.isPlaying && globalPlayer.song.id === song.id,
      isActive: globalPlayer.song.id === song.id,
      ...songSelector(song),
    })),
  }),
);

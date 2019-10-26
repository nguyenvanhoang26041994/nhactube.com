import { createSelector } from 'reselect';

const storageUri = 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com';

export const globalPlayerSelector = state => state.globalPlayer;

export const globalPlayerModeSelector = createSelector(
  globalPlayerSelector,
  globalPlayer => globalPlayer.mode,
);

export const globalPlayerSongSelector = createSelector(
  globalPlayerSelector,
  globalPlayer => ({
    url: globalPlayer.song.id ? `${storageUri}/o/songs%2F${globalPlayer.song.id}.mp3?alt=media` : '',
    avatarUrl: globalPlayer.song.id ? `${storageUri}/o/images%2Fsongs%2F${globalPlayer.song.id}?alt=media` : '',
    artistsName: globalPlayer.song.artists.map(artist => artist.name).join(', '),
    ...globalPlayer.song,
  }),
);

export const globalPlayerPlaylistSelector = createSelector(
  globalPlayerSelector,
  globalPlayer => ({
    ...globalPlayer.playlist,
    songs: globalPlayer.playlist.songs.map(song => ({
      url: song.id ? `${storageUri}/o/songs%2F${song.id}.mp3?alt=media` : '',
      avatarUrl: song.id ? `${storageUri}/o/images%2Fsongs%2F${song.id}?alt=media` : '',
      artistsName: song.artists.map(artist => artist.name).join(', '),
      isPlaying: globalPlayer.song.isPlaying && globalPlayer.song.id === song.id,
      isActive: globalPlayer.song.id === song.id,
      ...song,
    })),
  }),
);

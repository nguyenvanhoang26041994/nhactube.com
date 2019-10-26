import { createSelector } from 'reselect';
import { globalPlayerSongSelector } from '../../store/selectors';

const storageUri = 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com';

export const playlistDetailPageSelector = state => state.playlistDetailPageReducer;

export const playlistDetail = createSelector(
  playlistDetailPageSelector,
  globalPlayerSongSelector,
  (playlistDetailPageReducer, globalPlayerSong) => ({
    ...playlistDetailPageReducer.playlist,
    songs: playlistDetailPageReducer.playlist.songs.map(song => ({
      url: song.id ? `${storageUri}/o/songs%2F${song.id}.mp3?alt=media` : '',
      avatarUrl: song.id ? `${storageUri}/o/images%2Fsongs%2F${song.id}?alt=media` : '',
      artistsName: song.artists.map(artist => artist.name).join(', '),
      isPlaying: globalPlayerSong.isPlaying && globalPlayerSong.id === song.id,
      isActive: globalPlayerSong.id === song.id,
      ...song,
    })),
  }),
);

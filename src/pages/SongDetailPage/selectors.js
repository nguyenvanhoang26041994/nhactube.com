import { createSelector } from 'reselect';
import { globalPlayerSongSelector } from '../../store/selectors';

const storageUri = 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com';

export const songDetailPageSelector = state => state.songDetailPageReducer;

export const songDetail = createSelector(
  songDetailPageSelector,
  globalPlayerSongSelector,
  (songDetailPageReducer, globalPlayerSong) => ({
    url: songDetailPageReducer.song.id ? `${storageUri}/o/songs%2F${songDetailPageReducer.song.id}.mp3?alt=media` : '',
    avatarUrl: songDetailPageReducer.song.id ? `${storageUri}/o/images%2Fsongs%2F${songDetailPageReducer.song.id}?alt=media` : '',
    artistsName: songDetailPageReducer.song.artists.map(artist => artist.name).join(', '),
    isPlaying: globalPlayerSong.isPlaying && globalPlayerSong.id === songDetailPageReducer.song.id,
    isActive: globalPlayerSong.id === songDetailPageReducer.song.id,
    ...songDetailPageReducer.song,
  }),
);

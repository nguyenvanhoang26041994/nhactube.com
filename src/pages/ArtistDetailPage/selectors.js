import { createSelector } from 'reselect';

const storageUri = 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com';

export const artistDetailPageSelector = state => state.artistDetailPageReducer;

export const artistDetail = createSelector(
  artistDetailPageSelector,
  (artistDetailPageReducer) => ({
    avatarUrl: `${storageUri}/o/images%2Fartists%2F${artistDetailPageReducer.artist.id}?alt=media`,
    ...artistDetailPageReducer.artist,
  }),
);

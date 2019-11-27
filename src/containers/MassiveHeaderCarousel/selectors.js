import { createSelector } from 'reselect';

export const massiveHeaderCarouselReducerSelector = state => state.massiveHeaderCarouselReducer;

export const listSelector = createSelector(
  massiveHeaderCarouselReducerSelector,
  (massiveHeaderCarouselReducer) => massiveHeaderCarouselReducer.list,
);

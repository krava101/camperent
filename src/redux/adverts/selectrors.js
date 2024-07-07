import { createSelector } from '@reduxjs/toolkit';
import { selectFavoritesAdverts } from '../favoritesAdverts/selectors';

export const selectAdverts = state => state.adverts.adverts;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectIsLastPage = state => state.adverts.isLastPage;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFavoritesAdverts],
  (adverts, favAdverts) => {
    const updAdverts = adverts.map(advert => {
      const matchedFav = favAdverts.find(
        favAdvert => favAdvert._id === advert._id
      );
      return matchedFav ? matchedFav : advert;
    });
    return updAdverts;
  }
);

import { createSelector } from '@reduxjs/toolkit';
import { selectFavoritesAdverts } from '../favoritesAdverts/selectors';
import {
  selectEquipment,
  selectLocation,
  selectPage,
  selectType,
} from '../filter/selectors';
import { vehicleEquipment } from '../filter/constants';

export const selectAdverts = state => state.adverts.adverts;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectIsLastPage = state => state.adverts.isLastPage;

export const selectFilteredAdverts = createSelector(
  [
    selectAdverts,
    selectFavoritesAdverts,
    selectType,
    selectEquipment,
    selectLocation,
    selectPage,
  ],
  (adverts, favAdverts, type, equipment, location, page) => {
    const updAdverts = adverts.map(advert => {
      const matchedFav = favAdverts.find(
        favAdvert => favAdvert._id === advert._id
      );
      return matchedFav ? matchedFav : advert;
    });

    const filteredAdverts = updAdverts.filter(advert => {
      if (
        location &&
        location !== '' &&
        !advert.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false;
      }

      if (type && type !== '' && !advert.form.includes(type)) {
        return false;
      }

      if (equipment && equipment.length > 0) {
        const hasAllEquipments = equipment.every(e => {
          if (e === vehicleEquipment.bathroom) {
            return advert.details.toilet > 0 || advert.details.shower > 0;
          } else {
            if (e === vehicleEquipment.transmission) {
              return advert.transmission === e;
            }
            return advert.details[e] > 0;
          }
        });

        if (!hasAllEquipments) {
          return false;
        }
      }

      return true;
    });

    console.log(filteredAdverts);

    const startIndex = (page - 1) * 4;
    const endIndex = startIndex + 4;

    return filteredAdverts.slice(0, endIndex);
  }
);

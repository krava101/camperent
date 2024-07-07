import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favoritesAdverts',
  initialState: {
    adverts: [],
  },
  reducers: {
    addAdvertToFavorites(state, action) {
      const advert = { ...action.payload, favorites: true };
      const isExist = state.adverts.find(a => a._id === advert._id);
      if (!isExist) {
        state.adverts.push(advert);
      }
    },
    removeAdvertFromFavorites(state, action) {
      state.adverts = state.adverts.filter(a => a._id !== action.payload);
    },
  },
});

export const { addAdvertToFavorites, removeAdvertFromFavorites } =
  slice.actions;

export default slice.reducer;

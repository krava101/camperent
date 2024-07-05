import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'currentAdvert',
  initialState: {
    advert: {},
    categories: {},
  },
  reducers: {
    setCurrentAdvert(state, action) {
      state.advert = action.payload.advert;
      state.categories = action.payload.categories;
    },
    resetCurrentAdvert(state) {
      state.advert = {};
      state.categories = {};
    },
  },
});

export const { setCurrentAdvert, resetCurrentAdvert } = slice.actions;

export default slice.reducer;

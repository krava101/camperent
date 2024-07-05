import { configureStore } from '@reduxjs/toolkit';
import advertsReducer from './adverts/slice.js';
import controlsReducer from './controls/slice.js';
import currentAdvertReducer from './currentAdvert/slice.js';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    controls: controlsReducer,
    currentAdvert: currentAdvertReducer,
  },
});

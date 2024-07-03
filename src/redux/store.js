import { configureStore } from '@reduxjs/toolkit';
import advertsReducer from './adverts/slice.js';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});

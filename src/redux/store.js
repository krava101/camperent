import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import advertsReducer from './adverts/slice.js';
import filterReducer from './filter/slice.js';
import controlsReducer from './controls/slice.js';
import currentAdvertReducer from './currentAdvert/slice.js';
import favoritesAdvertsReducer from './favoritesAdverts/slice.js';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites-adverts',
  storage,
  whitelist: ['adverts'],
};

const favPersistReducer = persistReducer(
  persistConfig,
  favoritesAdvertsReducer
);

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
    controls: controlsReducer,
    currentAdvert: currentAdvertReducer,
    favoritesAdverts: favPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

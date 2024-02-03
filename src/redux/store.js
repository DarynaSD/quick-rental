import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

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

import { carsReducer } from './slice';



const favCarsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['cars'],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(favCarsPersistConfig, carsReducer), 
    // favCars: persistReducer(favCarsPersistConfig, carsReducer),
  },
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
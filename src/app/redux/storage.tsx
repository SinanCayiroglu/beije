import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import cartSlice from './cartSlice';

const rootReducer = combineReducers({
  cart: cartSlice,
  // Add other reducers here if needed
});

const persistConfig = {
  key: 'root',
  storage,
  // Add any additional configuration here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Add any additional middleware or enhancers if needed
});

export const persistor = persistStore(store);

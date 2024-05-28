import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import { contactSlice } from './contactSlice';
import { authSlice } from './authSlice';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactSlice.reducer,
  },
  middleware: () => [thunk],
});

export const persistor = persistStore(store);

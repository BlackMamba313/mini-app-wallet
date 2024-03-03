import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import currencySlice from './currency'


const rootReducer = combineReducers({
  auth: authSlice,
  currency: currencySlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

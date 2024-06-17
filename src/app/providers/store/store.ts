import { userSlice } from '@/entities';
import { schedulerSlice } from '@/entities/scheduler';
import { apiService } from '@/shared';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage,
};

const rootReducer = combineReducers({
  [apiService.reducerPath]: apiService.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
  [schedulerSlice.reducerPath]: schedulerSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiService.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

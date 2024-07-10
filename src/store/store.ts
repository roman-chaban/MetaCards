import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  blacklist: ['swiperSlice.swiperRef']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PURGE',
          'swiper/setSwiperRef'
        ],
        ignoredActionPaths: ['payload'],
        ignoredPaths: ['swiper.swiperRef']
      }
    })
});

const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export { store, persistor };

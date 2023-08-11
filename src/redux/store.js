import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';

import { columnsReducer } from './columns/slice';
import { authReducer } from './auth';
import { boardsReducer } from './boards';
import { cardReducer } from './tasks';
import userFilterReducer from './userFilterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const userFilterPersistConfig = {
  key: 'userFilter',
  storage,
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedUserFilterReducer = persistReducer(userFilterPersistConfig, userFilterReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    boards: boardsReducer,
    columns: columnsReducer,
    tasks: cardReducer,
    userFilter: persistedUserFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

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

import { authReducer } from './auth';
import { boardsReducer } from './boards';
import { columnsReducer } from './columns';
import { cardReducer } from './tasks';
import { themeReducer } from './theme';
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
const persistedUserFilterReducer = persistReducer(
  userFilterPersistConfig,
  userFilterReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    boards: boardsReducer,
    columns: columnsReducer,
    tasks: cardReducer,
    userFilter: persistedUserFilterReducer,
    theme: themeReducer,
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

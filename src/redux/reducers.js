import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';
import { boardsReducer } from './boards';
import { columnReducer } from './columns';
import { cardReducer } from './tasks';
import { filterReducer } from './userFilterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const userFilterPersistConfig = {
  key: 'userFilter',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  boards: boardsReducer,
  columns: columnReducer,
  tasks: cardReducer,
  filters: persistReducer(userFilterPersistConfig, filterReducer),
});

export default rootReducer;

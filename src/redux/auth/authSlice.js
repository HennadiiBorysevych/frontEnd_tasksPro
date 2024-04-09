import { createAction, createSlice, isAnyOf } from '@reduxjs/toolkit';

import * as authOperations from './authOperations';

const handleFulfilled = state => {
  state.isFetchingCurrentUser = false;
  state.error = null;
};

const handlePending = state => {
  state.isFetchingCurrentUser = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isFetchingCurrentUser = false;
  if (action.payload && typeof action.payload === 'string')
    state.error = action.payload;
};

const initialState = {
  user: {
    name: null,
    email: null,
    theme: 'Dark',
    avatarURL: null,
    help: null,
  },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const getActions = type => extraActions.map(action => action[type]);

export const setTokens = createAction('auth/setTokens');

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.tokenRefresh;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, state => (state = initialState))
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(authOperations.googleAuth.fulfilled, (state, action) => {
        const { token, ...userData } = action.payload.user;
        state.user = userData;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(authOperations.updateUserTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.data.theme;
      })
      .addCase(authOperations.updateUserHelp.fulfilled, (state, action) => {
        state.user.help = action.payload.message;
      })
      .addCase(setTokens, (state, action) => {
        const { token, tokenRefresh } = action.payload;
        state.token = token;
        state.refreshToken = tokenRefresh;
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

const extraActions = [
  authOperations.logIn,
  authOperations.register,
  authOperations.logOut,
  authOperations.fetchCurrentUser,
  authOperations.googleAuth,
  authOperations.updateUserInfo,
  authOperations.updateUserHelp,
  authOperations.recoverPassword,
  authOperations.recInPassword,
];

export const authReducer = authSlice.reducer;

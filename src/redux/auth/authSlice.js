import { createSlice } from '@reduxjs/toolkit';

import authOperations from './authOperations';

const handleFulfilled = state => {
  state.isFetchingCurrentUser = false;
  state.error = null;
};

const handlePending = state => {
  state.isFetchingCurrentUser = true;
};

const handleRejected = (state, action) => {
  state.isFetchingCurrentUser = false;
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
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = false;
        handleFulfilled(state);
      })
      .addCase(authOperations.register.pending, handlePending)
      .addCase(authOperations.register.rejected, handleRejected)

      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        handleFulfilled(state);
      })
      .addCase(authOperations.logIn.pending, handlePending)
      .addCase(authOperations.logIn.rejected, handleRejected)

      .addCase(authOperations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        handleFulfilled(state);
      })
      .addCase(authOperations.logOut.pending, handlePending)
      .addCase(authOperations.logOut.rejected, handleRejected)

      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        handleFulfilled(state);
      })
      .addCase(authOperations.googleAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
        handleFulfilled(state);
      })
      .addCase(authOperations.fetchCurrentUser.pending, handlePending)
      .addCase(authOperations.fetchCurrentUser.rejected, handleRejected)

      .addCase(authOperations.updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload.user;
        handleFulfilled(state);
      })

      .addCase(authOperations.updateUserInfo.rejected, handleRejected)

      .addCase(authOperations.updateUserTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.data.theme;
        handleFulfilled(state);
      })
      .addCase(authOperations.updateUserTheme.pending, handlePending)
      .addCase(authOperations.updateUserTheme.rejected, handleRejected)
      .addCase(authOperations.updateUserHelp.rejected, handleRejected)
      .addCase(authOperations.updateUserHelp.fulfilled, (state, action) => {
        state.user.help = action.payload.message;
        handleFulfilled(state);
      });
  },
});

export default authSlice.reducer;

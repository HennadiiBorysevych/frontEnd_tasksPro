import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  // user: { name: null, email: null, theme: null, avatarURL: null },
  user: {
    name: 'Kit',
    email: 'KitPes@mail.com',
    theme: 'dark',
    avatarURL:
      'https://koshka.top/uploads/posts/2021-12/1640013101_2-koshka-top-p-samie-smeshnie-koshek-2.jpg',
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: {
//       email: '',
//       name: '',
//       avatarURL: '',
//       theme: 'dark',
//     },
//     token: '',
//     isLoggedIn: false,
//     isRefreshing: false,
//     error: null,
//   },
//   extraReducers: builder => builder,
// });

// export const authReducer = authSlice.reducer;

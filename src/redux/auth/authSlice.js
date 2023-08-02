import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      name: '',
      avatarURL: '',
      theme: 'dark',
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => builder,
});

export const authReducer = authSlice.reducer;

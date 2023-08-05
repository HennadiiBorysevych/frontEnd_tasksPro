import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://backend-taskspro-public.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/register', credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/api/auth/login', credentials);
    token.set(data.token);
    console.log('data', data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No token found.');
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/api/auth/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'auth/updateUserInfo',
  async (updatedUser, thunkAPI) => {
    try {
      const response = await axios.patch('/api/users', updatedUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserTheme = createAsyncThunk(
  'auth/updateUserTheme',
  async (updatedTheme, thunkAPI) => {
    try {
      const response = await axios.patch('/api/users/theme', {
        theme: updatedTheme,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserHelp = createAsyncThunk(
  'auth/updateUserHelp',
  async (updatedHelp, thunkAPI) => {
    try {
      const response = await axios.patch('/api/users/help', {
        help: updatedHelp,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/updateUserAvatar',
  async (updatedAvatar, thunkAPI) => {
    try {
      const response = await axios.patch('/api/users/avatar', {
        avatar: updatedAvatar,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateUserInfo,
  updateUserTheme,
  updateUserHelp,
  updateUserAvatar,
};
export default operations;

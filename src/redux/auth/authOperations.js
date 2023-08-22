import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const googleAuth = createAsyncThunk(
  'auth/google',
  async (tokenAuth, thunkAPI) => {
    try {
      token.set(tokenAuth);
      const { data } = await axios.get('/api/users/current');
      data.user.token = tokenAuth;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
      const { data } = await axios.get('/api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateUserInfo = createAsyncThunk(
  'auth/updateUserInfo',
  async (updatedUser, thunkAPI) => {
    const formData = new FormData();

    if (updatedUser.avatarFile)
      formData.append('newAvatar', updatedUser.avatarFile);
    if (updatedUser.user) {
      for (const key in updatedUser.user) {
        formData.append(`${key}`, updatedUser.user[key]);
      }
    }
    try {
      const response = await axios.patch('/api/users', formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateUserTheme = createAsyncThunk(
  'auth/updateUserTheme',
  async (updatedTheme, thunkAPI) => {
    try {
      const response = await axios.patch('/api/users/themes', {
        theme: updatedTheme,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateUserHelp = createAsyncThunk(
  'auth/updateUserHelp',
  async (helpRequest, thunkAPI) => {
    try {
      const response = await axios.patch('/api/users/help', helpRequest);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const recoverPassword = createAsyncThunk(
  'auth/recoverPassword',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.patch('api/users/forgotpasswordsend', email);

      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const recInPassword = createAsyncThunk(
  'auth/recInPassword',
  async (passwordNew, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        '/api/users/forgotpassword',
        passwordNew
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  googleAuth,
  logOut,
  fetchCurrentUser,
  updateUserInfo,
  updateUserTheme,
  updateUserHelp,
  recoverPassword,
  recInPassword,
};
export default authOperations;

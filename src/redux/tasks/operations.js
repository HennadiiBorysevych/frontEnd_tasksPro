import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/tasks');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (name, thunkAPI) => {
    try {
      const response = await axios.post('/api/tasks', name);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ taskId, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/tasks/${taskId}`, updatedData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getTask = createAsyncThunk(
  'tasks/getTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
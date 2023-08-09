import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (boardId, thunkAPI) => {
    try {
      const res = await axios.get(`/api/boards/${boardId}`);
      return res.data.cards.map(({ _id, ...rest }) => ({ id: _id, ...rest }));
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

export const moveTask = createAsyncThunk(
  'tasks/moveSome',
  async (tasksData, thunkAPI) => {
    try {
      const response = await axios.put(
        `/api/drag/movetask`,
        tasksData.updatingDataStripped
      );
      return response.data?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

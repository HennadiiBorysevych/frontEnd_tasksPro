import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (boardId, thunkAPI) => {
    try {
      const res = await axios.get(`/api/boards/${boardId}`);
      const tasks = res.data.cards.map(({ _id, orderTask, ...rest }) => ({
        id: _id,
        order: orderTask,
        ...rest,
      }));
      return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (name, thunkAPI) => {
    try {
      const response = await axios.post('/api/cards', name);
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
      const response = await axios.patch(`/api/cards/${taskId}`, updatedData);
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
        `/api/cards/movetask`,
        tasksData.updatingDataStripped
      );
      return response.data?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const moveTaskToColumn = createAsyncThunk(
  'tasks/moveTaskToColumn',
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(`/api/cards/movetasktocolumn`, data);
      return response.data?.data.map(({ _id, orderTask, ...rest }) => ({
        id: _id,
        order: orderTask,
        ...rest,
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  fetchTasks,
  addTask,
  updateTask,
  getTask,
  deleteTask,
  moveTask,
  moveTaskToColumn,
};
export default operations;

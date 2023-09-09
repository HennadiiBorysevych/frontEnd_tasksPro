import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTasks = createAsyncThunk(
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
const getTask = createAsyncThunk('tasks/getTask', async (taskId, thunkAPI) => {
  try {
    const response = await axios.get(`/api/cards/${taskId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const addTask = createAsyncThunk('tasks/addTask', async (name, thunkAPI) => {
  console.log(name);
  try {
    const response = await axios.post('/api/cards', name);
    console.log(response.data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ taskId, updatedData }, thunkAPI) => {
    console.log(updatedData);
    console.log(taskId);
    try {
      const response = await axios.patch(`/api/cards/${taskId}`, updatedData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/cards/${taskId}`);
      return response.data?.data?._id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const moveTask = createAsyncThunk(
  'tasks/moveTask',
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
const moveTaskToColumn = createAsyncThunk(
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

const cardOperations = {
  fetchTasks,
  addTask,
  updateTask,
  getTask,
  deleteTask,
  moveTask,
  moveTaskToColumn,
};
export default cardOperations;

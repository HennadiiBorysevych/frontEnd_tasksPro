import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBoards = createAsyncThunk(
  'boards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/boards');
      return res.data?.result.map(({ _id, ...rest }) => ({ id: _id, ...rest }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (name, thunkAPI) => {
    try {
      const response = await axios.post('/api/boards', name);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ boardId, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/boards/${boardId}`, updatedData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getBoard = createAsyncThunk(
  'boards/getBoard',
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/boards/${boardId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/boards/${boardId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchColumnsTasks = createAsyncThunk(
  'columns/fetchAll',
  async (boardId, thunkAPI) => {
    try {
      const res = await axios.get(`/api/boards/${boardId}`);
      const columns = res.data.columns.map(({ _id, orderColumn, ...rest }) => ({
        id: _id,
        order: orderColumn,
        ...rest,
      }));
      const tasks = res.data.cards.map(({ _id, orderTask, ...rest }) => ({
        id: _id,
        order: orderTask,
        ...rest,
      }));
      return { columns, tasks };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  fetchBoards,
  addBoard,
  updateBoard,
  getBoard,
  deleteBoard,
  fetchColumnsTasks,
};
export default operations;

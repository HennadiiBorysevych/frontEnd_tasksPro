import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchBoards = createAsyncThunk('boards/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/api/boards');
    return res.data?.data.map(({ _id, ...rest }) => ({ id: _id, ...rest }));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const addBoard = createAsyncThunk('boards/addBoard', async (name, thunkAPI) => {
  try {
    const response = await axios.post('/api/boards', name);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const updateBoard = createAsyncThunk(
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

const getBoard = createAsyncThunk(
  'boards/getBoard',
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/boards/${boardId}`);
      const { _id, ...rest } = response.data.board;
      const board = { id: _id, ...rest };
      return { board };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, thunkAPI) => {
    try {
      await axios.delete(`/api/boards/${boardId}`);
      return boardId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const fetchColumnsTasks = createAsyncThunk(
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

const boardOperations = {
  fetchBoards,
  addBoard,
  updateBoard,
  getBoard,
  deleteBoard,
  fetchColumnsTasks,
};
export default boardOperations;

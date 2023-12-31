import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchColumns = createAsyncThunk(
  'columns/fetchAll',
  async (boardId, thunkAPI) => {
    try {
      const res = await axios.get(`/api/boards/${boardId}`);
      return res.data.columns.map(({ _id, orderColumn, ...rest }) => ({
        id: _id,
        order: orderColumn,
        ...rest,
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addColumn = createAsyncThunk(
  'columns/addColumn',
  async (name, thunkAPI) => {
    try {
      const response = await axios.post('/api/columns', name);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  async ({ columnId, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/api/columns/${columnId}`,
        updatedData
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const getColumn = createAsyncThunk(
  'columns/getColumn',
  async (columnId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/columns/${columnId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (columnId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/columns/${columnId}`);
      return response.data?.data?._id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const moveColumn = createAsyncThunk(
  'columns/moveColumn',
  async (columnData, thunkAPI) => {
    try {
      const response = await axios.put(
        `/api/columns/movecolumn`,
        columnData.updatingDataStripped
      );
      return response.data?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const columnOperations = {
  fetchColumns,
  getColumn,
  addColumn,
  updateColumn,
  deleteColumn,
  moveColumn,
};
export default columnOperations;

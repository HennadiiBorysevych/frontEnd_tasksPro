import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const moveTaskToColumn = createAsyncThunk(
  'columns/moveTaskToColumn',
  async (data, thunkAPI) => {
    try {
      //add correct result processing!!!
      await axios.put(`/api/drag/movetasktocolumn`, data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const moveColumn = createAsyncThunk(
  'columns/moveSome',
  async (columnData, thunkAPI) => {
    try {
      const response = await axios.put(
        `/api/drag/movecolumn`,
        columnData.updatingDataStripped
      );
      return response.data?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
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

export const updateColumn = createAsyncThunk(
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

export const getColumn = createAsyncThunk(
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

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (columnId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/columns/${columnId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../services';
import requestTemplate from '../services/requestTemplate';

export const fetchColumns = requestTemplate(
  'columns/fetchAll',
  '/api/boards/:id',
  'get',
  'columns'
);

export const addColumn = requestTemplate(
  'columns/addColumn',
  '/api/columns',
  'post',
  'data'
);

export const updateColumn = requestTemplate(
  'columns/updateColumn',
  '/api/columns/:columnId',
  'patch',
  'data'
);

export const deleteColumn = requestTemplate(
  'columns/deleteColumn',
  '/api/columns/:id',
  'delete',
  'data'
);

export const moveColumn = createAsyncThunk(
  'columns/moveColumn',
  async (columnData, thunkAPI) => {
    try {
      const response = await axiosInstance.put(
        `/api/columns/movecolumn`,
        columnData.updatingDataStripped
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

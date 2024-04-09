import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance, rearrangementResponse } from 'redux/services';

import requestTemplate from '../services/requestTemplate';

export const fetchTasks = requestTemplate(
  'cards/fetchAll',
  '/api/boards/:id',
  'get',
  'cards'
);

export const addTask = requestTemplate(
  'cards/addTask',
  '/api/cards',
  'post',
  'data'
);

export const updateTask = requestTemplate(
  'cards/updateTask',
  '/api/cards/:taskId',
  'patch',
  'data'
);

export const deleteTask = requestTemplate(
  'cards/deleteTask',
  '/api/cards/:id',
  'delete',
  'data'
);

export const moveTask = createAsyncThunk(
  'tasks/moveTask',
  async (tasksData, thunkAPI) => {
    try {
      const response = await axiosInstance.put(
        `/api/cards/movetask`,
        tasksData.updatingDataStripped
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const moveTaskToColumn = createAsyncThunk(
  'tasks/moveTaskToColumn',
  async (data, thunkAPI) => {
    try {
      const response = await axiosInstance.put(
        `/api/cards/movetasktocolumn`,
        data
      );
      return rearrangementResponse(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/authOperations';

import {
  fetchTasks,
  addTask,
  deleteTask,
  getTask,
  updateTask,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.error(action.payload);
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(addTask.pending, handlePending)
      .addCase(deleteTask.pending, handlePending)
      .addCase(getTask.pending, handlePending)
      .addCase(updateTask.pending, handlePending)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(getTask.rejected, handleRejected)
      .addCase(updateTask.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        console.log(`${action.payload.name} added to your tasks`);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
          console.log('Task deleted');
        }
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          console.log('Task updated');
        }
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;

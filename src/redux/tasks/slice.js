import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/authOperations';

import {
  fetchTasks,
  addTask,
  deleteTask,
  getTask,
  updateTask,
} from './operations';
// import Notiflix from "notiflix";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;

  // Notiflix.Notify.failure(action.payload);
  console.error(action.payload);
};

const tasksSlice = createSlice({
  name: 'task',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [addTask.pending]: handlePending,
    [deleteTask.pending]: handlePending,
    [getTask.pending]: handlePending,
    [updateTask.pending]: handlePending,
    [fetchTasks.rejected]: handleRejected,
    [addTask.rejected]: handleRejected,
    [deleteTask.rejected]: handleRejected,
    [getTask.rejected]: handleRejected,
    [updateTask.rejected]: handleRejected,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      // Notiflix.Notify.success(${action.payload.name} added to yours tasks);
      console.log(`${action.payload.name} added to yours tasks`);
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
      console.log('Task deleted');
      // Notiflix.Notify.success(Task deleted);
    },
    [getTask.fulfilled](state, action) {
      // New action
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    [updateTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
        console.log('Task updated');
        // Notiflix.Notify.success(Task updated);
      }
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;

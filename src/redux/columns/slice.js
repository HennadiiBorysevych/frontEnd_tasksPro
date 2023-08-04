import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/authOperations';

import {
  fetchColumns,
  addColumn,
  deleteColumn,
  getColumn,
  updateColumn,
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

const columnsSlice = createSlice({
  name: 'column',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchColumns.pending]: handlePending,
    [addColumn.pending]: handlePending,
    [deleteColumn.pending]: handlePending,
    [getColumn.pending]: handlePending,
    [updateColumn.pending]: handlePending,
    [fetchColumns.rejected]: handleRejected,
    [addColumn.rejected]: handleRejected,
    [deleteColumn.rejected]: handleRejected,
    [getColumn.rejected]: handleRejected,
    [updateColumn.rejected]: handleRejected,
    [fetchColumns.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      // Notiflix.Notify.success(${action.payload.name} added to yours columns);
      console.log(`${action.payload.name} added to yours columns`);
    },
    [deleteColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        column => column.id === action.payload.id
      );
      state.items.splice(index, 1);
      console.log('Column deleted');
      // Notiflix.Notify.success(Column deleted);
    },
    [getColumn.fulfilled](state, action) {
      // New action
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        column => column.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    [updateColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        column => column.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
        console.log('Column updated');
        // Notiflix.Notify.success(Column updated);
      }
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const сolumnsReducer = columnsSlice.reducer;

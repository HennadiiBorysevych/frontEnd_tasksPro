import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/authOperations';

import {
  fetchColumns,
  addColumn,
  deleteColumn,
  getColumn,
  updateColumn,
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

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchColumns.pending, handlePending)
      .addCase(addColumn.pending, handlePending)
      .addCase(deleteColumn.pending, handlePending)
      .addCase(getColumn.pending, handlePending)
      .addCase(updateColumn.pending, handlePending)
      .addCase(fetchColumns.rejected, handleRejected)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(deleteColumn.rejected, handleRejected)
      .addCase(getColumn.rejected, handleRejected)
      .addCase(updateColumn.rejected, handleRejected)
      .addCase(fetchColumns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        console.log(`${action.payload.name} added to your columns`);
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          column => column.id === action.payload.id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
          console.log('Column deleted');
        }
      })
      .addCase(getColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          column => column.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          column => column.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          console.log('Column updated');
        }
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const columnsReducer = columnsSlice.reducer;

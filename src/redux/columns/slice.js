import { createSlice } from '@reduxjs/toolkit';
import { updateOrderFromArray } from 'helpers';
import operations from 'redux/boards/boardOperations';

import { logOut } from '../auth/authOperations';

import { moveTaskToColumn } from './operations';
import {
  addColumn,
  deleteColumn,
  getColumn,
  moveColumn,
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
      .addCase(operations.fetchColumnsTasks.pending, handlePending)
      .addCase(moveTaskToColumn.pending, handlePending)
      .addCase(addColumn.pending, handlePending)
      .addCase(deleteColumn.pending, handlePending)
      .addCase(getColumn.pending, handlePending)
      .addCase(moveColumn.pending, handlePending)
      .addCase(updateColumn.pending, handlePending)
      .addCase(operations.fetchColumnsTasks.rejected, handleRejected)
      .addCase(moveTaskToColumn.rejected, handleRejected)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(deleteColumn.rejected, handleRejected)
      .addCase(getColumn.rejected, handleRejected)
      .addCase(moveColumn.rejected, handleRejected)
      .addCase(updateColumn.rejected, handleRejected)
      .addCase(operations.fetchColumnsTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.columns;
      })
      .addCase(moveColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // replace "order" field for items (by id) that present in payload array
        state.items = updateOrderFromArray(state.items, action.payload);
      })
      .addCase(moveTaskToColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.items = action.payload;
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

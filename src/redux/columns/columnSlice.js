import { createSlice } from '@reduxjs/toolkit';
import { updateOrdersFromArray } from 'helpers';
import operations from 'redux/boards/boardOperations';

import { logOut } from '../auth/authOperations';

import {
  addColumn,
  deleteColumn,
  getColumn,
  moveColumn,
  moveTaskToColumn,
  updateColumn,
} from './columnOperations';

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
      .addCase(moveColumn.pending, handlePending)
      .addCase(addColumn.pending, handlePending)
      .addCase(deleteColumn.pending, handlePending)
      .addCase(getColumn.pending, handlePending)
      .addCase(updateColumn.pending, handlePending)
      .addCase(operations.fetchColumnsTasks.rejected, handleRejected)
      .addCase(moveTaskToColumn.rejected, handleRejected)
      .addCase(moveColumn.rejected, handleRejected)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(deleteColumn.rejected, handleRejected)
      .addCase(getColumn.rejected, handleRejected)
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
        state.items = updateOrdersFromArray(state.items, action.payload);
      })
      .addCase(moveTaskToColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.items = action.payload;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const {
          _id: id,
          createdAt,
          updatedAt,
          ...rest
        } = action.payload.result;
        state.items.push({ id, ...rest });
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
        const {
          _id: id,
          createdAt,
          updatedAt,
          ...rest
        } = action.payload.result;
        const index = state.items.findIndex(column => column.id === id);
        if (index !== -1) {
          state.items[index] = { id, ...rest };
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

export default columnsSlice.reducer;

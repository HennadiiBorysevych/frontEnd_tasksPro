import { createSlice } from '@reduxjs/toolkit';
import { updateOrdersFromArray } from 'helpers';

import { logOut } from '../auth/authOperations';

// import operations from 'redux/boards/boardOperations';
import operations from './columnOperations';

// import {
//   addColumn,
//   deleteColumn,
//   getColumn,
//   moveColumn,
//   moveTaskToColumn,
//   updateColumn,
//   fetchColumns,
// } from './columnOperations';

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
      .addCase(operations.fetchColumns.pending, handlePending)
      // .addCase(operations.moveTaskToColumn.pending, handlePending)
      .addCase(operations.moveColumn.pending, handlePending)
      .addCase(operations.addColumn.pending, handlePending)
      .addCase(operations.deleteColumn.pending, handlePending)
      .addCase(operations.getColumn.pending, handlePending)
      .addCase(operations.updateColumn.pending, handlePending)
      .addCase(operations.fetchColumns.rejected, handleRejected)
      // .addCase(operations.moveTaskToColumn.rejected, handleRejected)
      .addCase(operations.moveColumn.rejected, handleRejected)
      .addCase(operations.addColumn.rejected, handleRejected)
      .addCase(operations.deleteColumn.rejected, handleRejected)
      .addCase(operations.getColumn.rejected, handleRejected)
      .addCase(operations.updateColumn.rejected, handleRejected)
      .addCase(operations.fetchColumns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        console.log('fetchCol: ', action.payload);
      })
      .addCase(operations.moveColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // replace "order" field for items (by id) that present in payload array
        state.items = updateOrdersFromArray(state.items, action.payload);
      })
      // .addCase(operations.moveTaskToColumn.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   // state.items = action.payload;
      // })
      .addCase(operations.addColumn.fulfilled, (state, action) => {
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
      .addCase(operations.deleteColumn.fulfilled, (state, action) => {
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
      .addCase(operations.getColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          column => column.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(operations.updateColumn.fulfilled, (state, action) => {
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

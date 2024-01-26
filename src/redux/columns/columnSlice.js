import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { updateOrdersFromArray } from 'helpers';

import * as columnOperations from './columnOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
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

const getActions = type => extraActions.map(action => action[type]);

const columnSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(columnOperations.fetchColumns.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(columnOperations.getColumn.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          column => column.id === action.payload
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(columnOperations.addColumn.fulfilled, (state, action) => {
        const { _id: id, createdAt, updatedAt, ...rest } = action.payload.data;
        state.items.push({ id, ...rest });
      })
      .addCase(columnOperations.updateColumn.fulfilled, (state, action) => {
        const { _id: id, createdAt, updatedAt, ...rest } = action.payload.data;
        const index = state.items.findIndex(column => column.id === id);
        if (index !== -1) {
          state.items[index] = { id, ...rest };
        }
      })
      .addCase(columnOperations.deleteColumn.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          column => column.id === action.payload
        );
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      })
      .addCase(columnOperations.moveColumn.fulfilled, (state, action) => {
        state.items = updateOrdersFromArray(state.items, action.payload);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

const extraActions = [
  columnOperations.fetchColumns,
  columnOperations.getColumn,
  columnOperations.addColumn,
  columnOperations.updateColumn,
  columnOperations.deleteColumn,
  columnOperations.moveColumn,
];

export const columnReducer = columnSlice.reducer;

import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { updateOrdersFromArray } from 'helpers';

import {
  generateActions,
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../services/handleFunctions';

import * as columnOperations from './columnOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [
  columnOperations.fetchColumns,
  columnOperations.addColumn,
  columnOperations.updateColumn,
  columnOperations.deleteColumn,
  columnOperations.moveColumn,
];

const getActions = generateActions(extraActions);

const columnSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(columnOperations.fetchColumns.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(columnOperations.addColumn.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(columnOperations.updateColumn.fulfilled, (state, action) => {
        const { id } = action.payload;
        const index = state.items.findIndex(column => column.id === id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(columnOperations.deleteColumn.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(columnOperations.moveColumn.fulfilled, (state, action) => {
        state.items = updateOrdersFromArray(state.items, action.payload);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const columnReducer = columnSlice.reducer;

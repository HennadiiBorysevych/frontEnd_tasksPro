import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { updateOrdersFromArray } from 'helpers';

import {
  generateActions,
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../services/handleFunctions';

import * as cardOperations from './cardOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [
  cardOperations.fetchTasks,
  cardOperations.addTask,
  cardOperations.updateTask,
  cardOperations.deleteTask,
  cardOperations.moveTask,
  cardOperations.moveTaskToColumn,
];

const getActions = generateActions(extraActions);

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(cardOperations.fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(cardOperations.addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(cardOperations.updateTask.fulfilled, (state, action) => {
        const { id } = action.payload;
        const index = state.items.findIndex(task => task.id === id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(cardOperations.deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(cardOperations.moveTask.fulfilled, (state, action) => {
        state.items = updateOrdersFromArray(state.items, action.payload);
      })
      .addCase(cardOperations.moveTaskToColumn.fulfilled, (state, action) => {
        state.items = state.items.map(item => {
          const matchingPayloadItem = action.payload.find(
            payloadItem => payloadItem.id === item.id
          );
          if (matchingPayloadItem) {
            return {
              ...item,
              ...matchingPayloadItem,
            };
          } else {
            return item;
          }
        });
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const cardReducer = cardSlice.reducer;

import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { updateOrdersFromArray } from 'helpers';

import cardOperations from './cardOperations';

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

const cardSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(cardOperations.fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(cardOperations.getTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(cardOperations.addTask.fulfilled, (state, action) => {
        const {
          _id: id,
          orderTask: order,
          createdAt,
          updatedAt,
          ...rest
        } = action.payload;
        console.log(action.payload);

        state.items.unshift({
          id,
          order,
          ...rest,
        });
        console.log(state.items);
      })
      .addCase(cardOperations.updateTask.fulfilled, (state, action) => {
        const { _id: id, createdAt, updatedAt, ...rest } = action.payload.data;
        const index = state.items.findIndex(task => task.id === id);
        if (index !== -1) {
          state.items[index] = {
            id,
            ...rest,
          };
        }
      })
      .addCase(cardOperations.deleteTask.fulfilled, (state, action) => {
        const deletedCardId = action.payload;
        state.items = state.items.filter(item => item.id !== deletedCardId);
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

const extraActions = [
  cardOperations.fetchTasks,
  cardOperations.getTask,
  cardOperations.addTask,
  cardOperations.updateTask,
  cardOperations.deleteTask,
  cardOperations.moveTask,
  cardOperations.moveTaskToColumn,
];

export default cardSlice.reducer;

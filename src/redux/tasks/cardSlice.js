import { createSlice } from '@reduxjs/toolkit';
import { updateOrdersFromArray } from 'helpers';

import { logOut } from '../auth/authOperations';

import {
  addTask,
  deleteTask,
  fetchTasks,
  getTask,
  moveTask,
  moveTaskToColumn,
  updateTask,
} from './cardOperations';

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

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(moveTaskToColumn.pending, handlePending)
      .addCase(moveTask.pending, handlePending)
      .addCase(addTask.pending, handlePending)
      .addCase(deleteTask.pending, handlePending)
      .addCase(getTask.pending, handlePending)
      .addCase(updateTask.pending, handlePending)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(moveTaskToColumn.rejected, handleRejected)
      .addCase(moveTask.rejected, handleRejected)
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(getTask.rejected, handleRejected)
      .addCase(updateTask.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(moveTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = updateOrdersFromArray(state.items, action.payload);
      })
      .addCase(moveTaskToColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
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
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const {
          _id: id,
          orderTask: order,
          createdAt,
          updatedAt,
          ...rest
        } = action.payload.data;
        state.items.push({
          id,
          order,
          ...rest,
        });
        console.log(`${action.payload.data.title} added to your tasks`);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const deletedCardId = action.payload;
        state.items = state.items.filter(item => item.id !== deletedCardId);
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { _id: id, createdAt, updatedAt, ...rest } = action.payload.data;
        const index = state.items.findIndex(task => task.id === id);
        if (index !== -1) {
          state.items[index] = {
            id,
            ...rest,
          };
          console.log('Task updated');
        }
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export default tasksSlice.reducer;

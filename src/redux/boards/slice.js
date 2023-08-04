import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/authOperations';

import {
  fetchBoards,
  addBoard,
  deleteBoard,
  getBoard,
  updateBoard,
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

const boardsSlice = createSlice({
  name: 'board',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchBoards.pending]: handlePending,
    [addBoard.pending]: handlePending,
    [deleteBoard.pending]: handlePending,
    [getBoard.pending]: handlePending,
    [updateBoard.pending]: handlePending,
    [fetchBoards.rejected]: handleRejected,
    [addBoard.rejected]: handleRejected,
    [deleteBoard.rejected]: handleRejected,
    [getBoard.rejected]: handleRejected,
    [updateBoard.rejected]: handleRejected,
    [fetchBoards.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      // Notiflix.Notify.success(${action.payload.name} added to yours boards);
      console.log(`${action.payload.name} added to yours boards`);
    },
    [deleteBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        board => board.id === action.payload.id
      );
      state.items.splice(index, 1);
      console.log('Board deleted');
      // Notiflix.Notify.success(Board deleted);
    },
    [getBoard.fulfilled](state, action) {
      // New action
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        board => board.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    [updateBoard.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        board => board.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
        console.log('Board updated');
        // Notiflix.Notify.success(Board updated);
      }
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const boardsReducer = boardsSlice.reducer;

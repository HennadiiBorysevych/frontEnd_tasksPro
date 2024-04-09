import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  generateActions,
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../services/handleFunctions';

import * as boardOperations from './boardOperations';

const initialState = {
  items: [],
  activeBoardIndex: null,
  isLoading: false,
  error: null,
};

const extraActions = [
  boardOperations.addBoard,
  boardOperations.deleteBoard,
  boardOperations.fetchBoards,
  boardOperations.getBoard,
  boardOperations.updateBoard,
];

const getActions = generateActions(extraActions);

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    resetBoardState: state => {
      return (state = initialState);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(boardOperations.fetchBoards.fulfilled, (state, action) => {
        state.items = action.payload;
        if (action.payload.length > 0) {
          state.activeBoardIndex = action.payload[0].id;
        } // рахуємо з 1
      })
      .addCase(boardOperations.getBoard.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          board => board.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          state.activeBoardIndex = action.payload.id;
        }
      })
      .addCase(boardOperations.addBoard.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.items.unshift(action.payload);
        state.activeBoardIndex = id;
      })
      .addCase(boardOperations.updateBoard.fulfilled, (state, action) => {
        const { id } = action.payload;
        const index = state.items.findIndex(board => board.id === id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(boardOperations.deleteBoard.fulfilled, (state, action) => {
        const deletedBoardId = action.payload;
        state.items = state.items.filter(item => item.id !== deletedBoardId);
        if (state.activeBoardIndex === deletedBoardId) {
          state.activeBoardIndex = null;
        }
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});

export const { resetBoardState } = boardSlice.actions;
export const boardsReducer = boardSlice.reducer;

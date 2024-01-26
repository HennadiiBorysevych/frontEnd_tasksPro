import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import * as boardOperations from './boardOperations';

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
  activeBoardIndex: null,
  isLoading: false,
  error: null,
};

const getActions = type => extraActions.map(action => action[type]);

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
          board => board.id === action.payload.board.id
        );
        if (index !== -1) {
          state.items[index] = action.payload.board;
          state.activeBoardIndex = action.payload.board.id;
        }
      })
      .addCase(boardOperations.addBoard.fulfilled, (state, action) => {
        const {
          _id: id,
          title,
          icon,
          background,
          isActive,
        } = action.payload.data;

        state.items.unshift({ id, title, icon, background, isActive });
        state.activeBoardIndex = id;
      })
      .addCase(boardOperations.updateBoard.fulfilled, (state, action) => {
        const {
          _id: id,
          title,
          icon,
          background,
          isActive,
        } = action.payload.data;
        const index = state.items.findIndex(board => board.id === id);
        if (index !== -1) {
          state.items[index] = {
            id,
            title,
            icon,
            background,
            isActive,
          };
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

const extraActions = [
  boardOperations.addBoard,
  boardOperations.deleteBoard,
  boardOperations.fetchBoards,
  boardOperations.getBoard,
  boardOperations.updateBoard,
];
export const { resetBoardState } = boardSlice.actions;
export const boardsReducer = boardSlice.reducer;

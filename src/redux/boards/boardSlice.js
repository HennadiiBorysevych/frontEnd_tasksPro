import { createSlice } from '@reduxjs/toolkit';

import {
  addBoard,
  deleteBoard,
  fetchBoards,
  getBoard,
  updateBoard,
} from './boardOperations';

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
  activeBoardIndex: null,
  isLoading: false,
  error: null,
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBoards.pending, handlePending)
      .addCase(addBoard.pending, handlePending)
      .addCase(deleteBoard.pending, handlePending)
      .addCase(getBoard.pending, handlePending)
      .addCase(updateBoard.pending, handlePending)
      .addCase(fetchBoards.rejected, handleRejected)
      .addCase(addBoard.rejected, handleRejected)
      .addCase(deleteBoard.rejected, handleRejected)
      .addCase(getBoard.rejected, handleRejected)
      .addCase(updateBoard.rejected, handleRejected)
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        if (action.payload.length > 0) {
          state.activeBoardIndex = action.payload[0].id;
        } // рахуємо з 1
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const {
          _id: id,
          title,
          icon,
          background,
          isActive,
        } = action.payload.result;
<<<<<<< HEAD
        state.items.push({ id, title, icon, background, isActive });
        // state.activeBoardIndex = state.items.length;
        state.activeBoardIndex = id;
        console.log(`${title} added to your boards`);
=======
        state.items.unshift({ id, title, icon, background, isActive });
        state.activeBoardIndex = id;
        console.log(`${action.payload.result.title} added to your boards`);
>>>>>>> dev
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const deletedBoardId = action.payload;
        state.items = state.items.filter(item => item.id !== deletedBoardId);
        console.log('Filter: Board deleted');
        if (state.activeBoardIndex === deletedBoardId) {
          state.activeBoardIndex = null;
        }
        // const index = state.items.findIndex(
        //   board => board.id === action.payload.id
        // );
        // if (index !== -1) {
        //   state.items.splice(index, 1);
        //   console.log('Board deleted');
        // }
      })
      .addCase(getBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board.id === action.payload.board.id
        );
        if (index !== -1) {
          state.items[index] = action.payload.board;
          state.activeBoardIndex = action.payload.board.id;
        }
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const {
          _id: id,
          title,
          icon,
          background,
          isActive,
        } = action.payload.result;
        const index = state.items.findIndex(board => board.id === id);
        if (index !== -1) {
          state.items[index] = {
            id,
            title,
            icon,
            background,
            isActive,
          };
          console.log('Board updated');
        }
      });
  },
});

export default boardsSlice.reducer;

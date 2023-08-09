import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBoards,
  addBoard,
  deleteBoard,
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
        state.activeBoardIndex = state.items.length ? 1 : null; // рахуємо з 1
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        state.activeBoardIndex = state.items.length;
        console.log(`${action.payload} added to your boards`);
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board.id === action.payload.id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
          console.log('Board deleted');
        }
      })
      .addCase(getBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          board => board.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          console.log('Board updated');
        }
      });
  },
});

export default boardsSlice.reducer;

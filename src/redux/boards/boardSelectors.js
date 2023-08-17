export const selectLoading = state => state.boards.isLoading;
export const selectAllBoards = state => state.boards.items;
export const selectBoardIndex = state => state.boards.activeBoardIndex;
export const selectOneBoard = (state, boardId) => {
  return state.boards.items.find(board => board.id === boardId);
};
export const selectActiveBoard = state => {
  return state.boards.items.find(
    board => board.id === state.boards.activeBoardIndex
  );
};

export const selectActiveBoardId = state => {
  const activeIndex = state.boards.activeBoardIndex;
  return activeIndex || state.boards.items.length ? activeIndex : null;
};

const boardSelectors = {
  selectLoading,
  selectAllBoards,
  selectOneBoard,
  selectBoardIndex,
  selectActiveBoard,
  selectActiveBoardId,
};
export default boardSelectors;

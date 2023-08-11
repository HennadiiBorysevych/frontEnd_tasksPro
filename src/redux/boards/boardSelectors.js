export const selectLoading = state => state.boards.isLoading;
export const selectAllBoards = state => state.boards.items;
export const selectOneBoard = (state, boardId) => {
  return state.boards.items.find(board => board.id === boardId);
};

export const selectActiveBoardId = state => {
  const activeIndex = state.boards.activeBoardIndex;
  // console.log(activeIndex);
  return activeIndex || state.boards.items.length ? activeIndex : null;
};

const boardSelectors = {
  selectLoading,
  selectAllBoards,
  selectOneBoard,
};
export default boardSelectors;

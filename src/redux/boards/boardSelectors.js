export const selectLoading = state => state.boards.isLoading;
export const selectAllBoards = state => state.boards.items;
export const selectOneBoard = (state, boardId) => {
  return state.boards.items.find(board => board.id === boardId);
};
const boardSelectors = {
  selectLoading,
  selectAllBoards,
  selectOneBoard,
};
export default boardSelectors;

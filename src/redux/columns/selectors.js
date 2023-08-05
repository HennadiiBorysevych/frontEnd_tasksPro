export const selectLoading = state => state.columns.isLoading;
export const selectAllColumns = state => state.columns.items;
export const selectOneColumn = (state, columnId) => {
  return state.columns.items.find(column => column.id === columnId);
};

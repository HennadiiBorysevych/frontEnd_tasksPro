export const selectLoading = state => state.tasks.isLoading;
export const selectAllTasks = state => state.tasks.items;
export const selectOneTask = (state, taskId) => {
  return state.tasks.items.find(task => task.id === taskId);
};

const cardSelectors = {
  selectLoading,
  selectAllTasks,
  selectOneTask,
};

export default cardSelectors;

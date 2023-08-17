import { selectAllTasks } from 'redux/tasks/cardSelectors';
import { createSelector } from 'reselect';

const selectLoading = state => state.columns.isLoading;
const selectAllColumns = state => state.columns.items;
const selectOneColumn = (state, columnId) => {
  return state.columns.items.find(column => column.id === columnId);
};

const selectColumnsAndTasks = createSelector(
  [selectAllColumns, selectAllTasks],
  (columns, tasks) => {
    return columns.map(column => {
      const ownTasks = tasks.filter(task => task.cardOwner === column.id);
      return {
        ...column,
        items: ownTasks,
      };
    });
  }
);

const columnsSelectors = {
  selectLoading,
  selectAllColumns,
  selectOneColumn,
  selectColumnsAndTasks,
};
export default columnsSelectors;

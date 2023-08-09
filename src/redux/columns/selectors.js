import { createSelector } from 'reselect';
import { selectAllTasks } from 'redux/tasks/selectors';

export const selectLoading = state => state.columns.isLoading;
export const selectAllColumns = state => state.columns.items;
export const selectOneColumn = (state, columnId) => {
  return state.columns.items.find(column => column.id === columnId);
};

export const selectColumnsAndTasks = createSelector(
  [selectAllColumns, selectAllTasks],
  (columns, tasks) => {
    console.log(
      '🚀 ~ file: selectors.js:13 ~ columns:',
      Array.isArray(columns),
      columns
    );
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
  selectAllColumns,
  selectColumnsAndTasks,
};
export default columnsSelectors;

import { selectAllTasks } from 'redux/tasks/cardSelectors';
import { createSelector } from 'reselect';

export const selectLoading = state => state.columns.isLoading;
export const selectAllColumns = state => state.columns.items;

export const selectColumnsAndTasks = createSelector(
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

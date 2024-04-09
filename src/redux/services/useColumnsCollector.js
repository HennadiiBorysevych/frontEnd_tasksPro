import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as columns from '../columns';

const useColumnsCollector = () => {
  const columnLoading = useSelector(columns.selectLoading);
  const allColumns = useSelector(columns.selectAllColumns);
  const columnsAndTasks = useSelector(columns.selectColumnsAndTasks);

  const dispatch = useDispatch();

  const getAllColumns = useCallback(
    boardId => dispatch(columns.fetchColumns(boardId)),
    [dispatch]
  );

  const addNewColumn = useCallback(
    name => dispatch(columns.addColumn(name)),
    [dispatch]
  );

  const updateExistingColumn = useCallback(
    (columnId, updatedData) =>
      dispatch(columns.updateColumn(columnId, updatedData)),
    [dispatch]
  );

  const removeColumn = useCallback(
    columnId => dispatch(columns.deleteColumn(columnId)),
    [dispatch]
  );

  const replaceColumn = useCallback(
    columnData => dispatch(columns.moveColumn(columnData)),
    [dispatch]
  );

  return {
    columnLoading,
    allColumns,
    columnsAndTasks,
    getAllColumns,
    addNewColumn,
    updateExistingColumn,
    removeColumn,
    replaceColumn,
  };
};

export default useColumnsCollector;

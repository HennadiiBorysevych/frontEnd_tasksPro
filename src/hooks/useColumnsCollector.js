import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { columnOperations, columnSelectors } from 'redux/columns';

const useColumnsCollector = () => {
  const columnLoading = useSelector(columnSelectors.selectLoading);
  const allColumns = useSelector(columnSelectors.selectAllColumns);
  const oneColumn = useSelector(columnSelectors.selectOneColumn);
  const columnsAndTasks = useSelector(columnSelectors.selectColumnsAndTasks);

  const dispatch = useDispatch();

  const getAllColumns = useCallback(
    boardId => dispatch(columnOperations.fetchColumns(boardId)),
    [dispatch]
  );

  const getOneColumn = useCallback(
    columnId => dispatch(columnOperations.getColumn(columnId)),
    [dispatch]
  );

  const addNewColumn = useCallback(
    name => dispatch(columnOperations.addColumn(name)),
    [dispatch]
  );

  const updateExistingColumn = useCallback(
    (columnId, updatedData) =>
      dispatch(columnOperations.updateColumn(columnId, updatedData)),
    [dispatch]
  );

  const removeColumn = useCallback(
    columnId => dispatch(columnOperations.deleteColumn(columnId)),
    [dispatch]
  );

  const replaceColumn = useCallback(
    columnData => dispatch(columnOperations.moveColumn(columnData)),
    [dispatch]
  );

  return {
    columnLoading,
    allColumns,
    oneColumn,
    columnsAndTasks,
    getAllColumns,
    getOneColumn,
    addNewColumn,
    updateExistingColumn,
    removeColumn,
    replaceColumn,
  };
};

export default useColumnsCollector;

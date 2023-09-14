import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cardOperations, cardSelectors } from 'redux/tasks';

const useCardsCollector = () => {
  const cardLoading = useSelector(cardSelectors.selectLoading);
  const allCards = useSelector(cardSelectors.selectAllTasks);
  const oneCard = useSelector(cardSelectors.selectOneTask);

  const dispatch = useDispatch();

  const getAllCards = useCallback(
    boardId => dispatch(cardOperations.fetchTasks(boardId)),
    [dispatch]
  );

  const getOneCard = useCallback(
    columnId => dispatch(cardOperations.getTask(columnId)),
    [dispatch]
  );

  const addNewCard = useCallback(
    name => dispatch(cardOperations.addTask(name)),
    [dispatch]
  );

  const updateExistingCard = useCallback(
    (columnId, updatedData) =>
      dispatch(cardOperations.updateTask(columnId, updatedData)),
    [dispatch]
  );

  const removeCard = useCallback(
    columnId => dispatch(cardOperations.deleteTask(columnId)),
    [dispatch]
  );

  const replaceCard = useCallback(
    columnData => dispatch(cardOperations.moveTask(columnData)),
    [dispatch]
  );

  const relocateCard = useCallback(
    columnData => dispatch(cardOperations.moveTaskToColumn(columnData)),
    [dispatch]
  );

  return {
    cardLoading,
    allCards,
    oneCard,
    getAllCards,
    getOneCard,
    addNewCard,
    updateExistingCard,
    removeCard,
    replaceCard,
    relocateCard,
  };
};

export default useCardsCollector;

import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as cards from '../tasks';

const useCardsCollector = () => {
  const cardLoading = useSelector(cards.selectLoading);
  const allCards = useSelector(cards.selectAllTasks);

  const dispatch = useDispatch();

  const getAllCards = useCallback(
    boardId => dispatch(cards.fetchTasks(boardId)),
    [dispatch]
  );

  const addNewCard = useCallback(
    name => dispatch(cards.addTask(name)),
    [dispatch]
  );

  const updateExistingCard = useCallback(
    (columnId, updatedData) =>
      dispatch(cards.updateTask(columnId, updatedData)),
    [dispatch]
  );

  const removeCard = useCallback(
    columnId => dispatch(cards.deleteTask(columnId)),
    [dispatch]
  );

  const replaceCard = useCallback(
    columnData => dispatch(cards.moveTask(columnData)),
    [dispatch]
  );

  const relocateCard = useCallback(
    columnData => dispatch(cards.moveTaskToColumn(columnData)),
    [dispatch]
  );

  return {
    cardLoading,
    allCards,
    getAllCards,
    addNewCard,
    updateExistingCard,
    removeCard,
    replaceCard,
    relocateCard,
  };
};

export default useCardsCollector;

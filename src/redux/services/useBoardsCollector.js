import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as boards from '../boards';

const useBoardsCollector = () => {
  const activeBoard = useSelector(boards.selectActiveBoard);
  const activeBoardId = useSelector(boards.selectActiveBoardId);
  const allBoards = useSelector(boards.selectAllBoards);
  const boardIndex = useSelector(boards.selectBoardIndex);
  const boardLoading = useSelector(boards.selectLoading);
  const oneBoard = useSelector(boards.selectOneBoard);

  const dispatch = useDispatch();

  const getAllBoards = useCallback(
    () => dispatch(boards.fetchBoards()),
    [dispatch]
  );
  const resetBoardsState = useCallback(
    () => dispatch(boards.resetBoardState()),
    [dispatch]
  );

  const getOneBoard = useCallback(
    boardId => dispatch(boards.getBoard(boardId)),
    [dispatch]
  );

  const addNewBoard = useCallback(
    name => dispatch(boards.addBoard(name)),
    [dispatch]
  );

  const updateExistingBoard = useCallback(
    (boardId, updatedData) =>
      dispatch(boards.updateBoard(boardId, updatedData)),
    [dispatch]
  );

  const removeBoard = useCallback(
    boardId => dispatch(boards.deleteBoard(boardId)),
    [dispatch]
  );

  return {
    boardLoading,
    allBoards,
    boardIndex,
    oneBoard,
    activeBoard,
    activeBoardId,
    getAllBoards,
    getOneBoard,
    addNewBoard,
    updateExistingBoard,
    removeBoard,
    resetBoardsState,
  };
};

export default useBoardsCollector;

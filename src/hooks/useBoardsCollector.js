import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { boardOperations, boardSelectors } from 'redux/boards';
import { resetBoardState } from 'redux/boards/boardSlice';

const useBoardsCollector = () => {
  const activeBoard = useSelector(boardSelectors.selectActiveBoard);
  const activeBoardId = useSelector(boardSelectors.selectActiveBoardId);
  const allBoards = useSelector(boardSelectors.selectAllBoards);
  const boardIndex = useSelector(boardSelectors.selectBoardIndex);
  const boardLoading = useSelector(boardSelectors.selectLoading);
  const oneBoard = useSelector(boardSelectors.selectOneBoard);

  const dispatch = useDispatch();

  const getAllBoards = useCallback(
    () => dispatch(boardOperations.fetchBoards()),
    [dispatch]
  );
  const resetBoardsState = useCallback(
    () => dispatch(resetBoardState()),
    [dispatch]
  );

  const getOneBoard = useCallback(
    boardId => dispatch(boardOperations.getBoard(boardId)),
    [dispatch]
  );

  const addNewBoard = useCallback(
    name => dispatch(boardOperations.addBoard(name)),
    [dispatch]
  );

  const updateExistingBoard = useCallback(
    (boardId, updatedData) =>
      dispatch(boardOperations.updateBoard(boardId, updatedData)),
    [dispatch]
  );

  const removeBoard = useCallback(
    boardId => dispatch(boardOperations.deleteBoard(boardId)),
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

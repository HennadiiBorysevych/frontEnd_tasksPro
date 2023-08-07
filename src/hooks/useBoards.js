import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addBoard,
  deleteBoard,
  fetchBoards,
  getBoard,
  updateBoard,
} from 'redux/boards/operations';
import {
  selectLoading,
  selectAllBoards,
  selectOneBoard,
} from 'redux/boards/selectors';

const useBoards = () => {
  const loading = useSelector(selectLoading);
  const allBoards = useSelector(selectAllBoards);
  const oneBoard = useSelector(selectOneBoard);

  const dispatch = useDispatch();

  const getAllBoards = useCallback(() => dispatch(fetchBoards()), [dispatch]);

  const getOneBoard = boardId => dispatch(getBoard(boardId));

  const addNewBoard = name => dispatch(addBoard(name));

  const updateExistingBoard = ({ boardId, updatedData }) =>
    dispatch(updateBoard(boardId, updatedData));

  const removeBoard = boardId => dispatch(deleteBoard(boardId));

  return {
    loading,
    allBoards,
    oneBoard,
    getAllBoards,
    getOneBoard,
    addNewBoard,
    updateExistingBoard,
    removeBoard,
  };
};

export default useBoards;

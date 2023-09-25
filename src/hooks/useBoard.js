import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserFilter } from 'redux/userFilterSlice';

import { boardModel } from 'constants';

import { useBoardContext } from 'contexts';
import { clearTitleBoardInUrl, encodeTitleBoardInUrl } from 'helpers';

import useBoardsCollector from './useBoardsCollector';

const useBoard = (currentBoard, closeModal) => {
  const {
    allBoards,
    getAllBoards,
    getOneBoard,
    removeBoard,
    addNewBoard,
    updateExistingBoard,
  } = useBoardsCollector();
  const { activeBoardId, setActiveBoard } = useBoardContext();

  const initialBoard = currentBoard ? currentBoard : boardModel;
  const [title, setTitle] = useState(initialBoard?.title);
  const [icon, setIcon] = useState(initialBoard?.icon);
  const [background, setBackground] = useState(initialBoard?.background);
  const [board, setBoard] = useState(initialBoard);

  const dispatch = useDispatch();

  useEffect(() => {
    if (activeBoardId) {
      const updatedBoard = allBoards?.find(board => board.id === activeBoardId);
      setBoard(updatedBoard);
    }
  }, [activeBoardId, allBoards]);

  useEffect(() => {
    if (currentBoard) {
      setTitle(currentBoard?.title);
    }
  }, [currentBoard]);

  const handleBoardSubmit = async () => {
    const { id, user, ...rest } = board;
    await setActiveBoard(id);

    if (currentBoard) {
      updateExistingBoard({
        boardId: id,
        updatedData: { ...rest, title: title },
      });
      if (title) {
        encodeTitleBoardInUrl(title);
      }
    } else {
      addNewBoard(rest);
    }
    if (typeof closeModal === 'function') {
      closeModal();
    }
  };

  const handleTitle = useCallback(e => {
    setTitle(e.currentTarget.value);
  }, []);

  useEffect(() => {
    setBoard(prev => {
      const { background: prevBg, ...rest } = prev;
      return background === ''
        ? { ...rest, title, icon, isActive: false }
        : { ...rest, title, icon, background, isActive: false };
    });
  }, [background, icon, title]);

  const handleActiveBoard = async boardId => {
    try {
      await getOneBoard(boardId);
      await setActiveBoard(boardId);

      const activatedBoard = await allBoards.find(
        board => board.id === boardId
      );

      const { title } = activatedBoard;

      if (title) {
        encodeTitleBoardInUrl(title);
      }
      const filterBoard = localStorage.getItem(boardId);
      if (filterBoard) {
        dispatch(setUserFilter(filterBoard));
      }
    } catch (error) {
      console.error('Error getting board data', error);
    }
  };

  const handleDeleteBoard = async id => {
    try {
      localStorage.removeItem(id);
      removeBoard(id);
      getAllBoards();

      if (allBoards.length > 1) {
        const firstBoard = allBoards[0];
        await setActiveBoard(firstBoard?.id);

        const { title } = firstBoard;
        encodeTitleBoardInUrl(title);
      } else {
        await setActiveBoard(null);
        clearTitleBoardInUrl();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const decodedTitle = decodeURIComponent(currentBoard?.id);

  return {
    title,
    icon,
    background,
    activeBoardId,
    decodedTitle,
    setIcon,
    setBackground,
    handleTitle,
    handleBoardSubmit,
    handleActiveBoard,
    handleDeleteBoard,
  };
};

export default useBoard;

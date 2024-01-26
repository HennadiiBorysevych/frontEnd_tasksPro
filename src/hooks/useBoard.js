import { useCallback, useEffect, useState } from 'react';
import { useBoardsRedux, useFilterRedux } from 'redux/services';

import { boardModel } from 'constants';

import { useBoardContext } from 'contexts';
import { clearTitleBoardInUrl, encodeTitleBoardInUrl } from 'helpers';

const useBoard = (currentBoard, closeModal) => {
  const {
    allBoards,
    getAllBoards,
    getOneBoard,
    removeBoard,
    addNewBoard,
    updateExistingBoard,
  } = useBoardsRedux();
  const { activeBoardId, setActiveBoard } = useBoardContext();
  const { updateFilter } = useFilterRedux();

  const initialBoard = currentBoard ? currentBoard : boardModel;
  const [title, setTitle] = useState(initialBoard?.title);
  const [icon, setIcon] = useState(initialBoard?.icon);
  const [background, setBackground] = useState(initialBoard?.background);
  const [board, setBoard] = useState(initialBoard);

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

  useEffect(() => {
    setBoard(prev => {
      const { background: prevBg, ...rest } = prev;
      return background === ''
        ? { ...rest, title, icon, isActive: false }
        : { ...rest, title, icon, background, isActive: false };
    });
  }, [background, icon, title]);

  const handleBoardSubmit = async () => {
    const hasChanges =
      title !== currentBoard?.title ||
      icon !== currentBoard?.icon ||
      background !== currentBoard?.background;

    if (hasChanges) {
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
    }
  };

  const handleTitle = useCallback(e => {
    setTitle(e.currentTarget.value);
  }, []);

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
        updateFilter(filterBoard);
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

  const inputs = [
    {
      name: 'title',
      type: 'text',
      placeholder: currentBoard ? currentBoard?.title : 'Title',
    },
  ];

  const decodedTitle = decodeURIComponent(currentBoard?.id);

  return {
    inputs,
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

import { useCallback, useEffect, useState } from 'react';

import useBoards from './useBoards';

const boardModel = {
  title: '',
  icon: 'icon-Project',
  background: '',
  isActive: false,
};

const useBoard = (currentBoard, closeModal) => {
  const { addNewBoard, updateExistingBoard } = useBoards();

  const initialBoard = currentBoard ? currentBoard : boardModel;
  const [title, setTitle] = useState(initialBoard?.title);
  const [icon, setIcon] = useState(initialBoard?.icon);
  const [background, setBackground] = useState(initialBoard?.background);
  const [board, setBoard] = useState(initialBoard);
  const [titleChecker, seTitleChecker] = useState(false);

  const handleBoardSubmit = e => {
    e.preventDefault();

    if (title === '') {
      seTitleChecker(true);
      setTimeout(() => {
        seTitleChecker(false);
      }, 2000);
      return;
    }
    //  && !currentBoard)
    const { id, user, ...rest } = board;

    if (currentBoard) {
      console.log('Update');
      updateExistingBoard({
        boardId: id,
        updatedData: rest,
      });
    } else {
      addNewBoard(rest);
      console.log('Add');
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

  return {
    title,
    icon,
    background,
    setIcon,
    setBackground,
    handleTitle,
    titleChecker,
    handleBoardSubmit,
  };
};

export default useBoard;

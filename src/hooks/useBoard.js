import { useCallback, useEffect, useState } from 'react';
import { encodedTitleInUrl } from 'helpers';

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

  const handleBoradSubmit = () => {
    if (title === '' && !currentBoard) {
      seTitleChecker(true);
      setTimeout(() => {
        seTitleChecker(false);
      }, 2000);
      return;
    }
    const { id, user, ...rest } = board;

    if (currentBoard) {
      updateExistingBoard({
        boardId: id,
        updatedData: rest,
      });
      encodedTitleInUrl(title);
    } else {
      addNewBoard(rest);
      encodedTitleInUrl(title);
    }

    closeModal();
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
    icon,
    background,
    setIcon,
    setBackground,
    handleTitle,
    titleChecker,
    handleBoradSubmit,
  };
};

export default useBoard;

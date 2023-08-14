import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { boardsOperations } from 'redux/boards';

const boardModel = {
  title: '',
  icon: 'icon-Project',
  background: '',
  isActive: false,
};

const useBoard = (currentBoard, closeModal) => {
  const initialBoard = currentBoard ? currentBoard : boardModel;

  const [title, setTitle] = useState(initialBoard?.title);
  const [icon, setIcon] = useState(initialBoard?.icon);
  const [background, setBackground] = useState(initialBoard?.background);
  const [board, setBoard] = useState(initialBoard);
  const [titleChecker, seTitleChecker] = useState(false);

  const dispatch = useDispatch();

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
      dispatch(
        boardsOperations.updateBoard({
          boardId: id,
          updatedData: rest,
        })
      );
    } else {
      dispatch(boardsOperations.addBoard(rest));
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

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

  const handleBoradSubmit = useCallback(() => {
    if (title === '' && !currentBoard) {
      seTitleChecker(true);
      setTimeout(() => {
        seTitleChecker(false);
      }, 500);
      return;
    }
    const { id, ...rest } = board;
    currentBoard
      ? dispatch(
          boardsOperations.updateBoard({
            boardId: id,
            updatedData: rest,
          })
        )
      : dispatch(boardsOperations.addBoard(rest));
    closeModal();
  }, [board, closeModal, currentBoard, dispatch, title]);

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

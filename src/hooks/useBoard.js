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

  console.log(currentBoard);
  console.log(initialBoard);
  const dispatch = useDispatch();

  const handleBoradSubmit = useCallback(async () => {
    if (title === '' && !currentBoard) {
      seTitleChecker(true);
      setTimeout(() => {
        seTitleChecker(false);
      }, 500);
      return;
    }
    const { id, ...rest } = board;
    console.log(rest);

    try {
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
    } catch (error) {
      console.error('An error occurred while adding or editing a board', error);
    }
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

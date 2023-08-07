import { useCallback, useEffect, useState } from 'react';

const boardModel = {
  title: '',
  icon: 'icon-Project',
  background: '',
  isActive: false,
};

const useBoard = () => {
  const [title, setTitle] = useState(boardModel.title);
  const [icon, setIcon] = useState(boardModel.icon);
  const [background, setBackground] = useState(boardModel.background);
  const [board, setBoard] = useState(boardModel);
  const [titleChecker, seTitleChecker] = useState(false);

  const handleBoradSubmit = useCallback(() => {
    console.log(board);
    if (title === '') {
      seTitleChecker(true);
      setTimeout(() => {
        seTitleChecker(false);
      }, 500);
    }
  }, [board, title]);

  const handleTitle = useCallback(e => {
    setTitle(e.currentTarget.value);
  }, []);

  useEffect(() => {
    setBoard({
      title,
      icon,
      background,
      isActive: false,
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

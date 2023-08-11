import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { backgroundImage } from '../helpers';
import {
  selectAllBoards,
  selectBoardIndex,
} from '../redux/boards/boardSelectors';

const useBackground = () => {
  const [bgPic, setBgPic] = useState('');

  const indexBoard = useSelector(selectBoardIndex);
  const boardBackground = useSelector(selectAllBoards);

  const handleResize = useCallback(() => {
    const boardBG = boardBackground.find(board => {
      return board.id === indexBoard;
    })?.background;

    const imageUrl = backgroundImage(boardBG);
    setBgPic(imageUrl);
  }, [boardBackground, indexBoard]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return [bgPic];
};

export default useBackground;

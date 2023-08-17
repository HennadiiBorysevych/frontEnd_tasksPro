import { useCallback, useEffect, useState } from 'react';
import { backgroundImage } from 'helpers';

import useBoards from './useBoards';

const useBackground = () => {
  const [bgPic, setBgPic] = useState('');
  const { allBoards, boardIndex } = useBoards();

  const handleResize = useCallback(() => {
    const boardBG = allBoards.find(board => {
      return board.id === boardIndex;
    })?.background;
    if (boardBG === 'default' || boardBG === undefined || boardBG === 'empty') {
      setBgPic('#1f1f1f');
    } else {
      const imageUrl = backgroundImage(boardBG);
      setBgPic(imageUrl);
    }
  }, [allBoards, boardIndex]);

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

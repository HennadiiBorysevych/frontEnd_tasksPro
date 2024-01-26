import { useCallback, useEffect, useState } from 'react';
import { useBoardsRedux } from 'redux/services';

import { getBackgroundImage } from 'helpers';

const useBackground = () => {
  const [bgPic, setBgPic] = useState('');
  const { allBoards, boardIndex } = useBoardsRedux();

  const handleResize = useCallback(() => {
    const boardBG = allBoards.find(board => {
      return board.id === boardIndex;
    })?.background;
    if (boardBG === 'default' || boardBG === undefined || boardBG === 'empty') {
      setBgPic('#1f1f1f');
    } else {
      document.cookie = 'myCookie=myValue; SameSite=None; Secure';
      const imageUrl = getBackgroundImage(boardBG);
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

import { useState, useEffect, useCallback } from 'react';

import { backgroundImage } from '../helpers';

const useBackground = bgName => {
  const [bgPic, setBgPic] = useState('');

  const handleResize = useCallback(() => {
    const imageUrl = backgroundImage(bgName);
    setBgPic(imageUrl);
  }, [bgName]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return [bgPic];
};

export default useBackground;

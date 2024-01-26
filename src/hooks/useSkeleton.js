import { useCallback, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useAuthRedux } from 'redux/services';

import { BASE_COLORS } from 'constants';

const useSkeleton = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { theme } = useAuthRedux();

  const { generalColors } = BASE_COLORS;

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const generateSkeletonList = useCallback(
    count => {
      return new Array(count)
        .fill(null)
        .map((_, index) => (
          <Skeleton
            key={index}
            height={154}
            style={{ marginBottom: 10, marginLeft: screenWidth < 776 ? 60 : 0 }}
          />
        ));
    },
    [screenWidth]
  );

  const baseColor =
    theme === 'Dark'
      ? generalColors.blackBase
      : theme === 'Violet'
      ? generalColors.accentVioletBase
      : generalColors.backgroundVioletBase;

  const highlightColor =
    theme === 'Dark'
      ? generalColors.backgroundDarkBase
      : theme === 'Violet'
      ? generalColors.backgroundVioletBase
      : generalColors.foregroundLightBase;

  const skeletonColumns = screenWidth > 1150 ? 3 : screenWidth > 776 ? 2 : 1;

  return {
    screenWidth,
    generalColors,
    generateSkeletonList,
    baseColor,
    highlightColor,
    skeletonColumns,
  };
};

export default useSkeleton;

import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useAuthRedux } from 'redux/services';

import { useSkeleton } from 'hooks';

import * as styles from '../commonMainScreen.styled';

const BoardVariant = () => {
  const { theme } = useAuthRedux();
  const {
    baseColor,
    highlightColor,
    generalColors,
    skeletonColumns,
    generateSkeletonList,
  } = useSkeleton();

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <styles.BackgroundHome variantLoader="board">
        <styles.BoardBody
          baseColor={
            theme === 'Violet'
              ? generalColors.backgroundVioletBase
              : highlightColor
          }
        >
          <styles.BoardHead>
            <styles.ProjectName>
              <Skeleton style={{ marginLeft: 60 }} />
            </styles.ProjectName>
          </styles.BoardHead>
          <styles.Column>
            {[...Array(skeletonColumns)].map((_, index) => (
              <styles.ListWrapper key={index}>
                {generateSkeletonList(3)}
              </styles.ListWrapper>
            ))}
          </styles.Column>
        </styles.BoardBody>
      </styles.BackgroundHome>
    </SkeletonTheme>
  );
};

export default BoardVariant;

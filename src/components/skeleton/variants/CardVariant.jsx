import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useAuthRedux } from 'redux/services';

import { useSkeleton } from 'hooks';

import * as styles from '../commonMainScreen.styled';

const CardVariant = () => {
  const { theme } = useAuthRedux();
  const { baseColor, highlightColor, generalColors, generateSkeletonList } =
    useSkeleton();

  return (
    <SkeletonTheme
      baseColor={baseColor}
      highlightColor={highlightColor}
      width="100%"
    >
      <styles.ColumnWrapper>
        <styles.ColumnsList
          baseColor={
            theme === 'Violet'
              ? generalColors.backgroundVioletBase
              : highlightColor
          }
        >
          <styles.CardColumn>
            <styles.CardList>
              {generateSkeletonList(1)}
              <Skeleton style={{ height: '56px' }} />
            </styles.CardList>
          </styles.CardColumn>
        </styles.ColumnsList>
      </styles.ColumnWrapper>
    </SkeletonTheme>
  );
};

export default CardVariant;

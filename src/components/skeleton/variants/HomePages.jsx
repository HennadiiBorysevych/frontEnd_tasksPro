import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useAuthRedux } from 'redux/services';

import { useSkeleton } from 'hooks';

import * as styles from '../commonMainScreen.styled';

const HomePages = () => {
  const { theme } = useAuthRedux();
  const {
    baseColor,
    highlightColor,
    screenWidth,
    generalColors,
    skeletonColumns,
    generateSkeletonList,
  } = useSkeleton();

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <styles.BackgroundHome>
        {screenWidth > 1150 && (
          <styles.SideBar
            baseColor={
              theme === 'Violet' ? generalColors.accentVioletBase : baseColor
            }
          >
            <Skeleton
              width="12.5rem"
              height="25rem"
              style={{ marginBottom: 80, marginTop: 100 }}
            />

            <Skeleton
              width="12.5rem"
              height="25rem"
              style={{ marginBottom: 30 }}
            />
            <Skeleton width="15.5rem" height={50} />
          </styles.SideBar>
        )}
        <styles.Header baseColor={highlightColor}>
          <styles.Logo>
            <Skeleton />
          </styles.Logo>
          <styles.UserSettings>
            <styles.Theme>
              <Skeleton />
            </styles.Theme>
            <styles.UserName>
              <Skeleton />
            </styles.UserName>
            <styles.UserPic>
              <Skeleton />
            </styles.UserPic>
          </styles.UserSettings>
        </styles.Header>
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
          <styles.Button>
            <Skeleton
              height={50}
              style={{ marginLeft: 60, marginBottom: 20 }}
            />
          </styles.Button>
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

export default HomePages;

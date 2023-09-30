import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PropTypes from 'prop-types';

import { BASE_COLORS } from 'constants';

import { useAuthCollector } from 'hooks';

import 'react-loading-skeleton/dist/skeleton.css';
import {
  Background,
  BackgroundHome,
  BackgroundLogin,
  BoardBody,
  BoardHead,
  Button,
  CardColumn,
  CardList,
  Column,
  ColumnsList,
  ColumnWrapper,
  Header,
  ListWrapper,
  Logo,
  ProjectName,
  SideBar,
  Tabs,
  Theme,
  UserName,
  UserPic,
  UserSettings,
} from './SkeletonLoader.styled';

const SkeletonLoader = ({ page }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { theme } = useAuthCollector();

  const { generalColors } = BASE_COLORS;

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generateSkeletonList = count => {
    return new Array(count)
      .fill(null)
      .map((_, index) => (
        <Skeleton
          key={index}
          height={154}
          style={{ marginBottom: 10, marginLeft: screenWidth < 776 ? 60 : 0 }}
        />
      ));
  };

  const skeletonColumns = screenWidth > 1150 ? 3 : screenWidth > 776 ? 2 : 1;

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

  return (
    <>
      {page === '/welcome' && (
        <SkeletonTheme
          baseColor={generalColors.accentGreenBase}
          highlightColor={generalColors.whiteBase}
        >
          <Background>
            <Skeleton width={162} height={162} style={{ marginBottom: 24 }} />
            <Skeleton width={200} height={40} style={{ marginBottom: 24 }} />
            <Skeleton width={400} height={36} style={{ marginBottom: 20 }} />
            <Skeleton width={344} height={50} style={{ marginBottom: 14 }} />
            <Skeleton width={40} height={21} style={{ marginBottom: 14 }} />
          </Background>
        </SkeletonTheme>
      )}
      {page === '/auth/login' && (
        <>
          <SkeletonTheme
            baseColor={generalColors.accentGreenBase}
            highlightColor={generalColors.whiteBase}
          >
            <BackgroundLogin>
              <Tabs>
                <Skeleton width={100} height={23} />
                <Skeleton width={70} height={23} />
              </Tabs>
              <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
            </BackgroundLogin>
          </SkeletonTheme>
        </>
      )}
      {page === '/auth/register' && (
        <>
          <SkeletonTheme
            baseColor={generalColors.accentGreenBase}
            highlightColor={generalColors.whiteBase}
          >
            <BackgroundLogin>
              <Tabs>
                <Skeleton width={100} height={23} style={{}} />
                <Skeleton width={70} height={23} />
              </Tabs>
              <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
            </BackgroundLogin>
          </SkeletonTheme>
        </>
      )}
      {page.includes('/home/') && (
        <>
          <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
            <BackgroundHome>
              {screenWidth > 1150 && (
                <SideBar
                  baseColor={
                    theme === 'Violet'
                      ? generalColors.accentVioletBase
                      : baseColor
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
                </SideBar>
              )}
              <Header baseColor={highlightColor}>
                <Logo>
                  <Skeleton />
                </Logo>
                <UserSettings>
                  <Theme>
                    <Skeleton />
                  </Theme>
                  <UserName>
                    <Skeleton />
                  </UserName>
                  <UserPic>
                    <Skeleton />
                  </UserPic>
                </UserSettings>
              </Header>
              <BoardBody
                baseColor={
                  theme === 'Violet'
                    ? generalColors.backgroundVioletBase
                    : highlightColor
                }
              >
                <BoardHead>
                  <ProjectName>
                    <Skeleton style={{ marginLeft: 60 }} />
                  </ProjectName>
                </BoardHead>
                <Button>
                  <Skeleton
                    height={50}
                    style={{ marginLeft: 60, marginBottom: 20 }}
                  />
                </Button>
                <Column>
                  {[...Array(skeletonColumns)].map((_, index) => (
                    <ListWrapper key={index}>
                      {generateSkeletonList(3)}
                    </ListWrapper>
                  ))}
                </Column>
              </BoardBody>
            </BackgroundHome>
          </SkeletonTheme>
        </>
      )}
      {page === '/board' && (
        <>
          <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
            <BackgroundHome variantLoader="board">
              <BoardBody
                baseColor={
                  theme === 'Violet'
                    ? generalColors.backgroundVioletBase
                    : highlightColor
                }
              >
                <BoardHead>
                  <ProjectName>
                    <Skeleton style={{ marginLeft: 60 }} />
                  </ProjectName>
                </BoardHead>
                <Column>
                  {[...Array(skeletonColumns)].map((_, index) => (
                    <ListWrapper key={index}>
                      {generateSkeletonList(3)}
                    </ListWrapper>
                  ))}
                </Column>
              </BoardBody>
            </BackgroundHome>
          </SkeletonTheme>
        </>
      )}
      {page === '/column' && (
        <>
          <SkeletonTheme
            baseColor={baseColor}
            highlightColor={highlightColor}
            width="100%"
          >
            <ColumnWrapper>
              <ColumnsList
                baseColor={
                  theme === 'Violet'
                    ? generalColors.backgroundVioletBase
                    : highlightColor
                }
              >
                <BoardHead>
                  <ProjectName>
                    <Skeleton style={{ marginLeft: 60 }} />
                  </ProjectName>
                </BoardHead>
                <Column>
                  {[...Array(skeletonColumns)].map((_, index) => (
                    <ListWrapper key={index}>
                      {generateSkeletonList(3)}
                    </ListWrapper>
                  ))}
                </Column>
              </ColumnsList>
            </ColumnWrapper>
          </SkeletonTheme>
        </>
      )}
      {page === '/card' && (
        <>
          <SkeletonTheme
            baseColor={baseColor}
            highlightColor={highlightColor}
            width="100%"
          >
            <ColumnWrapper>
              <ColumnsList
                baseColor={
                  theme === 'Violet'
                    ? generalColors.backgroundVioletBase
                    : highlightColor
                }
              >
                <CardColumn>
                  <CardList>
                    {generateSkeletonList(1)}
                    <Skeleton style={{ height: '56px' }} />
                  </CardList>
                </CardColumn>
              </ColumnsList>
            </ColumnWrapper>
          </SkeletonTheme>
        </>
      )}
    </>
  );
};

export default SkeletonLoader;

SkeletonLoader.propTypes = {
  page: PropTypes.string.isRequired,
};

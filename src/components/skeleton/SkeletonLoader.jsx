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
  Button,
  ColumnsList,
  Header,
  ListWrapper,
  Logo,
  ProjectName,
  SideBar,
  Tabs,
  Theme,
  UserName,
  UserPic,
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
                <Skeleton width={100} height={23} style={{}} />
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
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Theme>
                    <Skeleton />
                  </Theme>
                  <UserName>
                    <Skeleton />
                  </UserName>
                  <UserPic>
                    <Skeleton />
                  </UserPic>
                </div>
              </Header>
              <BoardBody
                baseColor={
                  theme === 'Violet'
                    ? generalColors.backgroundVioletBase
                    : highlightColor
                }
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <ProjectName>
                    <Skeleton style={{ marginLeft: 60 }} />
                  </ProjectName>
                </div>
                <Button>
                  <Skeleton
                    height={50}
                    style={{ marginLeft: 60, marginBottom: 20 }}
                  />
                </Button>
                <div
                  style={{
                    display: 'flex',
                    gap: '30px',
                    marginTop: 7,
                    justifyContent: 'space-between',
                  }}
                >
                  {[...Array(skeletonColumns)].map((_, index) => (
                    <ListWrapper key={index}>
                      {generateSkeletonList(3)}
                    </ListWrapper>
                  ))}
                </div>
              </BoardBody>
            </BackgroundHome>
          </SkeletonTheme>
        </>
      )}
      {page === '/board' && (
        <>
          <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
            <BackgroundHome
              style={{
                position: 'absolute',
                left: 275,
                top: 70,
                maxWidth: '77%',
              }}
            >
              <BoardBody
                baseColor={
                  theme === 'Violet'
                    ? generalColors.backgroundVioletBase
                    : highlightColor
                }
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <ProjectName>
                    <Skeleton style={{ marginLeft: 60 }} />
                  </ProjectName>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '30px',
                    marginTop: 6,
                    justifyContent: 'space-between',
                  }}
                >
                  {[...Array(skeletonColumns)].map((_, index) => (
                    <ListWrapper key={index}>
                      {generateSkeletonList(3)}
                    </ListWrapper>
                  ))}
                </div>
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
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
              }}
            >
              <ColumnsList
                baseColor={
                  theme === 'Violet'
                    ? generalColors.backgroundVioletBase
                    : highlightColor
                }
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <ProjectName>
                    <Skeleton style={{ marginLeft: 60 }} />
                  </ProjectName>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '30px',
                    marginTop: 6,
                    justifyContent: 'space-between',
                  }}
                >
                  {[...Array(skeletonColumns)].map((_, index) => (
                    <ListWrapper key={index}>
                      {generateSkeletonList(3)}
                    </ListWrapper>
                  ))}
                </div>
              </ColumnsList>
            </div>
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
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
              }}
            >
              <ColumnsList
                baseColor={
                  theme === 'Violet'
                    ? generalColors.backgroundVioletBase
                    : highlightColor
                }
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    width: '335px',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    {generateSkeletonList(1)}
                    <Skeleton style={{ height: '56px' }} />
                  </div>
                </div>
              </ColumnsList>
            </div>
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

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import {
  Background,
  BackgroundHome,
  BackgroundLogin,
  BoardBody,
  Button,
  Filters,
  Header,
  Logo,
  ProjectName,
  Tabs,
  Theme,
  UserName,
  UserPic,
} from './SkeletonLoader.styled';

const SkeletonLoader = ({ page }) => {
  const screenWidth = window.innerWidth;

  return (
    <>
      {page === '/welcome' && (
        <SkeletonTheme baseColor="#bedbb0" highlightColor="#ffffff">
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
          <SkeletonTheme baseColor="#bedbb0" highlightColor="#ffffff">
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
          <SkeletonTheme baseColor="#bedbb0" highlightColor="#ffffff">
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
          <SkeletonTheme baseColor="#161616" highlightColor="#1f1f1f">
            <BackgroundHome>
              <Header>
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
              <BoardBody>
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
                <div style={{ display: 'flex', marginTop: 30 }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {new Array(3).fill(null).map((_, index) => (
                      <Skeleton
                        key={index}
                        width={'20rem'}
                        height={154}
                        style={{ marginLeft: 60, marginBottom: 5 }}
                      />
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {screenWidth > 776 &&
                      new Array(3)
                        .fill(null)
                        .map((_, index) => (
                          <Skeleton
                            key={index}
                            width={'20rem'}
                            height={154}
                            style={{ marginLeft: 60, marginBottom: 5 }}
                          />
                        ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {screenWidth > 1250 &&
                      new Array(3)
                        .fill(null)
                        .map((_, index) => (
                          <Skeleton
                            key={index}
                            width={'20rem'}
                            height={154}
                            style={{ marginLeft: 60, marginBottom: 5 }}
                          />
                        ))}
                  </div>
                </div>
              </BoardBody>
            </BackgroundHome>
          </SkeletonTheme>
        </>
      )}
    </>
  );
};

export default SkeletonLoader;

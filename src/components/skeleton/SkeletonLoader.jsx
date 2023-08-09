import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  Background,
  BackgroundLogin,
  Tabs,
  Header,
} from './SkeletonLoader.styled';

const SkeletonLoader = ({ page }) => {
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
          <SkeletonTheme baseColor="#161616" highlightColor="#1f1f1f;">
            <>
              <Header>
                <Skeleton width={24} height={24} />
                <div>
                  <Skeleton width={70} height={23} />
                  <Skeleton width={70} height={23} />
                </div>
              </Header>
              <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
            </>
          </SkeletonTheme>
        </>
      )}
    </>
  );
};

export default SkeletonLoader;

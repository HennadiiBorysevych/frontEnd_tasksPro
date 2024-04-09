import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useSkeleton } from 'hooks';

import * as styles from '../commonAuthScreen.styled';

const AuthScreen = ({ page }) => {
  const { generalColors } = useSkeleton();

  return (
    <SkeletonTheme
      baseColor={generalColors.accentGreenBase}
      highlightColor={generalColors.whiteBase}
    >
      <styles.Background>
        {page === '/auth/register' || page === '/auth/login' ? (
          <styles.Tabs>
            <Skeleton width={100} height={23} />
            <Skeleton width={70} height={23} />
          </styles.Tabs>
        ) : null}
        {page === '/auth/register' ? (
          <>
            <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
            <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
            <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
            <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
          </>
        ) : page === '/auth/login' ? (
          <>
            <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
            <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
            <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
          </>
        ) : (
          page === '/welcome' && (
            <>
              <Skeleton width={162} height={162} style={{ marginBottom: 24 }} />
              <Skeleton width={200} height={40} style={{ marginBottom: 24 }} />
              <Skeleton width={400} height={36} style={{ marginBottom: 20 }} />
              <Skeleton width={344} height={50} style={{ marginBottom: 14 }} />
              <Skeleton width={40} height={21} style={{ marginBottom: 14 }} />
            </>
          )
        )}
      </styles.Background>
    </SkeletonTheme>
  );
};

export default AuthScreen;

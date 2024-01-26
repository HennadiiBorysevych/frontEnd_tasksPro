import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useSkeleton } from 'hooks';

import * as styles from '../commonAuthScreen.styled';

const Login = () => {
  const { generalColors } = useSkeleton();

  return (
    <SkeletonTheme
      baseColor={generalColors.accentGreenBase}
      highlightColor={generalColors.whiteBase}
    >
      <styles.Background>
        <styles.Tabs>
          <Skeleton width={100} height={23} />
          <Skeleton width={70} height={23} />
        </styles.Tabs>
        <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
        <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
        <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
      </styles.Background>
    </SkeletonTheme>
  );
};

export default Login;

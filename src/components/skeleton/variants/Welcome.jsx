import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useSkeleton } from 'hooks';

import * as styles from '../commonAuthScreen.styled';

const Welcome = () => {
  const { generalColors } = useSkeleton();

  return (
    <SkeletonTheme
      baseColor={generalColors.accentGreenBase}
      highlightColor={generalColors.whiteBase}
    >
      <styles.Background>
        <Skeleton width={162} height={162} style={{ marginBottom: 24 }} />
        <Skeleton width={200} height={40} style={{ marginBottom: 24 }} />
        <Skeleton width={400} height={36} style={{ marginBottom: 20 }} />
        <Skeleton width={344} height={50} style={{ marginBottom: 14 }} />
        <Skeleton width={40} height={21} style={{ marginBottom: 14 }} />
      </styles.Background>
    </SkeletonTheme>
  );
};

export default Welcome;

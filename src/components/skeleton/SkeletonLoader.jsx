import SkeletonPropTypes from './propTypes';
import {
  BoardSkeleton,
  CardSkeleton,
  ColumnSkeleton,
  HomePagesSkeleton,
  LoginSkeleton,
  RegisterSkeleton,
  WelcomeSkeleton,
} from './variants';

import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = ({ page }) => {
  return (
    <>
      {page === '/welcome' && <WelcomeSkeleton />}
      {page === '/auth/login' && <LoginSkeleton />}
      {page === '/auth/register' && <RegisterSkeleton />}
      {page.includes('/home/') && <HomePagesSkeleton />}
      {page === '/board' && <BoardSkeleton />}
      {page === '/column' && <ColumnSkeleton />}
      {page === '/card' && <CardSkeleton />}
    </>
  );
};

export default SkeletonLoader;

SkeletonLoader.propTypes = SkeletonPropTypes;

import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import SkeletonLoader from './skeleton/SkeletonLoader';

const Layout = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<SkeletonLoader page={location.pathname} />}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;

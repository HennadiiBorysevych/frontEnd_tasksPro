import { Navigate } from 'react-router-dom';

import { useAuthCollector } from 'hooks';

const PrivatePage = ({ component: Component, redirectTo = '/welcome' }) => {
  const { isLoggedIn } = useAuthCollector();

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivatePage;

import { Navigate } from 'react-router-dom';

import { useAuthCollector } from 'hooks';

const PublicPage = ({ component: Component, redirectTo = '/home' }) => {
  const { isLoggedIn } = useAuthCollector();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default PublicPage;

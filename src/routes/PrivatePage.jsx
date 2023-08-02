import { Navigate } from 'react-router-dom';

const PrivatePage = ({ component: Component, redirectTo = '/auth/signin' }) => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivatePage;

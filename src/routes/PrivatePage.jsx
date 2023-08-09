import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PrivatePage = ({ component: Component, redirectTo = '/welcome' }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivatePage;

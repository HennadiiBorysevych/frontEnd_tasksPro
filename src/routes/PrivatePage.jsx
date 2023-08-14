import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const PrivatePage = ({ component: Component, redirectTo = '/welcome' }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivatePage;

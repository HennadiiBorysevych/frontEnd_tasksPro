import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const PublicPage = ({ component: Component, redirectTo = '/home' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default PublicPage;

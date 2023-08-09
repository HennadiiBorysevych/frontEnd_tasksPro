import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PublicPage = ({ component: Component, redirectTo = '/home' }) => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  console.log(Component);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default PublicPage;

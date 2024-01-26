import { Navigate } from 'react-router-dom';
import { useAuthRedux } from 'redux/services';

const PublicPage = ({ component: Component, redirectTo = '/home' }) => {
  const { isLoggedIn } = useAuthRedux();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default PublicPage;

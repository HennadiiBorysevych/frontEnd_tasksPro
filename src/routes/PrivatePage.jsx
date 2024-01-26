import { Navigate } from 'react-router-dom';
import { useAuthRedux } from 'redux/services';

const PrivatePage = ({ component: Component, redirectTo = '/welcome' }) => {
  const { isLoggedIn } = useAuthRedux();

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivatePage;

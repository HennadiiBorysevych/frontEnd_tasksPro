import { Navigate } from 'react-router-dom';

const PublicPage = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default PublicPage;

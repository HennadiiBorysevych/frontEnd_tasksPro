import { lazy, Suspense, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import PrivatePage from 'routes/PrivatePage';
import PublicPage from 'routes/PublicPage';

import GlobalStyles from '../GlobalStyles';

import SkeletonLoader from './skeleton/SkeletonLoader';
import Layout from './Layout';

const Welcome = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const Board = lazy(() => import('../pages/Board'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const App = () => {
  const { isLoggedIn, isFetchingCurrent, fetchUser } = useAuth();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <GlobalStyles />

      <Suspense>
        {isFetchingCurrent ? (
          <SkeletonLoader page="/home/" />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={<Navigate to={!isLoggedIn ? '/welcome' : '/home'} />}
              />

              <Route
                path="welcome"
                element={<PublicPage component={<Welcome />} />}
              />
              <Route
                path="auth/:id"
                element={<PublicPage component={<AuthPage />} />}
              />

              <Route
                path="home"
                element={<PrivatePage component={<HomePage />} />}
              >
                <Route
                  path=":boardId"
                  element={<PrivatePage component={<Board />} />}
                />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        )}
      </Suspense>
    </>
  );
};

export default App;

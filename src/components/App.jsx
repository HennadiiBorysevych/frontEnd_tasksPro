import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from '../GlobalStyles';
// import PublicPage from 'routes/PublicPage';
import PrivatePage from 'routes/PrivatePage';

import { useAuth } from 'hooks';
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
          <p>Loading</p>
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={<Navigate to={!isLoggedIn ? '/welcome' : '/home'} />}
              />

              <Route
                path="welcome"
                element={!isLoggedIn ? <Welcome /> : <Navigate to="/home" />}
              />
              <Route
                path="auth/:id"
                element={!isLoggedIn ? <AuthPage /> : <Navigate to="/home" />}
              />

              <Route
                path="home"
   element={isLoggedIn ? <HomePage /> : <Navigate to="/welcome" />}
              >
                <Route
                  path=":boardId"
                  element={<PrivatePage component={Board} />}
                />

                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Route>
          </Routes>
        )}
      </Suspense>
    </>
  );
};

export default App;

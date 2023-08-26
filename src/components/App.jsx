import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuth } from 'hooks';
import { BoardProvider } from 'hooks';
import PasswordPage from 'pages/PasswordPage';
import PrivatePage from 'routes/PrivatePage';
import PublicPage from 'routes/PublicPage';

import GlobalStyles from '../GlobalStyles';

import SkeletonLoader from './skeleton/SkeletonLoader';
import Layout from './Layout';

import 'react-toastify/dist/ReactToastify.css';

const Welcome = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const Board = lazy(() => import('../pages/Board'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const App = () => {
  const { isLoggedIn, isFetchingCurrent, theme, fetchUser } = useAuth();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const toastTheme = theme === 'Dark' ? 'dark' : 'light';

  const toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: toastTheme,
  };

  return (
    <BoardProvider>
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

              <Route path="auth/forgot_password" element={<PasswordPage />} />

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
      <ToastContainer toastConfig={toastConfig} />
    </BoardProvider>
  );
};

export default App;

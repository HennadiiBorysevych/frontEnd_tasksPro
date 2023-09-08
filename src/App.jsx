import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Flip } from 'react-toastify';
import { AuthPage, PasswordPage, WelcomePage } from 'pages';

import { Layout } from 'layouts';
import { PrivatePage, PublicPage } from 'routes';

import { BoardProvider } from 'contexts';
import { useAuth } from 'hooks';

import { SkeletonLoader } from 'components';

import { StyledContainer } from 'assets/styles/toastifyStyles.styled';

import GlobalStyles from './GlobalStyles';

import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const Board = lazy(() => import('./blocks/board/Board'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const App = () => {
  const { isLoggedIn, isFetchingCurrent, theme, fetchUser } = useAuth();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const toastTheme = theme === 'Dark' ? 'dark' : 'light';

  const toastConfig = {
    position: 'top-right',
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: toastTheme,
  };

  return (
    <>
      <GlobalStyles />
      <Suspense>
        {isFetchingCurrent ? (
          <SkeletonLoader page="/home" />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={<Navigate to={!isLoggedIn ? '/welcome' : '/home'} />}
              />

              <Route
                path="welcome"
                element={<PublicPage component={<WelcomePage />} />}
              />
              <Route
                path="auth/:id"
                element={<PublicPage component={<AuthPage />} />}
              />

              <Route path="auth/forgot_password" element={<PasswordPage />} />

              <Route
                path="home"
                element={
                  <PrivatePage
                    component={
                      <BoardProvider>
                        <HomePage />
                      </BoardProvider>
                    }
                  />
                }
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
      <StyledContainer
        theme={theme}
        toastConfig={toastConfig}
        transition={Flip}
        role="alert"
      />
    </>
  );
};

export default App;

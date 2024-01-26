import React, { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Flip } from 'react-toastify';
import { useAuthRedux } from 'redux/services';

import { Layout } from 'layouts';
import { AuthPage, PasswordPage, WelcomePage } from 'pages';
import { PrivatePage, PublicPage } from 'routes';

import { BoardProvider, ToggleProvider } from 'contexts';

import { SkeletonLoader } from 'components';

import * as appStyles from 'assets/styles/toastifyStyles.styled';

import GlobalStyles from './GlobalStyles';

import 'overlayscrollbars/overlayscrollbars.css';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const Board = lazy(() => import('./blocks/board/Board'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const App = () => {
  const { isLoggedIn, isFetchingCurrent, theme, fetchUser } = useAuthRedux();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const toastTheme = theme === 'Dark' ? 'dark' : 'light';

  const toastConfig = {
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: toastTheme,
  };

  const loadingContent = isFetchingCurrent ? (
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
          element={
            <PublicPage
              component={
                <ToggleProvider>
                  <AuthPage />
                </ToggleProvider>
              }
            />
          }
        />

        <Route
          path="auth/forgot_password"
          element={<PublicPage component={<PasswordPage />} />}
        />

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
  );

  return (
    <>
      <GlobalStyles />
      <Suspense>{loadingContent}</Suspense>
      <appStyles.StyledContainer
        theme={theme}
        toastConfig={toastConfig}
        transition={Flip}
        role="alert"
      />
    </>
  );
};

export default App;

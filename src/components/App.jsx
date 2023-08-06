import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from '../GlobalStyles';
// import PublicPage from 'routes/PublicPage';
import PrivatePage from 'routes/PrivatePage';

import { useAuth } from 'hooks';

const Welcome = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const Board = lazy(() => import('../pages/Board'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const App = () => {
  const { isLoggedIn, isFetchingCurrent } = useAuth();

  return (
    <>
      <GlobalStyles />
      {isFetchingCurrent ? (
        <p>...Loading. Please, wait.</p>
      ) : (
        <Suspense>
          <Routes>
            <Route
              path="/"
              element={
                !isLoggedIn ? <Welcome /> : <Navigate replace to="/home" />
              }
            />
            <Route
              path="/auth/:id"
              element={
                !isLoggedIn ? <AuthPage /> : <Navigate replace to="/home" />
              }
            />

            <Route path="/home" element={<HomePage />}>
              <Route
                path=":boardId"
                element={<PrivatePage component={<Board />} />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;

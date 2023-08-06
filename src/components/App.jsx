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
  const { isFetchingCurrent } = useAuth();

  return (
    <>
      <GlobalStyles />

      <Suspense>
        {isFetchingCurrent ? (
          <p>Loading</p>
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />

            <Route path="/welcome" element={<Welcome />} />
            <Route path="/auth/:id" element={<AuthPage />} />

            <Route path="/home" element={<HomePage />}>
              <Route
                path=":boardId"
                element={<PrivatePage component={<Board />} />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        )}
      </Suspense>
    </>
  );
};

export default App;

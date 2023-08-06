import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from '../GlobalStyles';
// import PublicPage from 'routes/PublicPage';
import PrivatePage from 'routes/PrivatePage';
import { useDispatch, useSelector } from 'react-redux';

import authSelectors from 'redux/auth/authSelectors';
import operations from 'redux/auth/authOperations';

const Welcome = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const Board = lazy(() => import('../pages/Board'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const App = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isRefresh = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />

      <Suspense>
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
      </Suspense>
    </>
  );
};

export default App;

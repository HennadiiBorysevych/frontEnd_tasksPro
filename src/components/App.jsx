import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from '../GlobalStyles';
// import PublicPage from 'routes/PublicPage';
import PrivatePage from 'routes/PrivatePage';

const Welcome = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const Board = lazy(() => import('../pages/Board'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Suspense>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/auth/:id" element={<AuthPage />} />

          <Route path="/home" element={<HomePage />}>
            <Route
              path=":boardId"
              element={<PrivatePage component={<Board />} />}
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

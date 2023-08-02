import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScreenPage from '../pages/ScreenPage';

import GlobalStyles from '../GlobalStyles';
import SharedLayout from '../sharedLayouts/SharedLayouts';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

const App = () => {
  const userLogged = false;
  return (
    <>
      <GlobalStyles />
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              userLogged ? (
                <Navigate to="/home" replace={true} />
              ) : (
                <WelcomePage />
              )
            }
          />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />
          <Route
            path="/home"
            element={
              userLogged ? <SharedLayout /> : <Navigate to="/" replace={true} />
            }
          >
            <Route index element={<HomePage />} />
            <Route path=":boardId" element={<ScreenPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

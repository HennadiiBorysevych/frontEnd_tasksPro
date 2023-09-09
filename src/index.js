import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import generalStore from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { appThemes } from 'themes';

import { useAuth } from 'hooks';

import './GlobalStyles.js';

import App from './App';

import './index.css';

const ThemedApp = () => {
  const { theme } = useAuth();

  const themeChoice = React.useMemo(() => {
    switch (theme) {
      case 'Dark':
        return appThemes.darkTheme;
      case 'Light':
        return appThemes.lightTheme;
      case 'Violet':
        return appThemes.violetTheme;
      default:
        return appThemes.darkTheme;
    }
  }, [theme]);

  return (
    <ThemeProvider theme={themeChoice}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={generalStore.store}>
      <PersistGate loading={null} persistor={generalStore.persistor}>
        <BrowserRouter basename="/frontEnd_tasksPro">
          <ThemedApp />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

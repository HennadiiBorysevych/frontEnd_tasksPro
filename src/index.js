import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { persistor, store } from 'redux/store';
import selectTheme from 'redux/theme/themeSelectors';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'components/App';

import './GlobalStyles.js';

import { darkTheme, lightTheme, violetTheme } from './themes/theme';

const ThemedApp = () => {
  const selectedTheme = useSelector(selectTheme);

  const theme = React.useMemo(() => {
    switch (selectedTheme) {
      case 'Dark':
        return darkTheme;
      case 'Light':
        return lightTheme;
      case 'Violet':
        return violetTheme;
      default:
        return darkTheme;
    }
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/frontEnd_tasksPro">
          <ThemedApp />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

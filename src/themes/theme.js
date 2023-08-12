import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#161616',
      buttonPlusIcon: '#121212',
      icon: '#BEDBB0',
      buttonPrimaryIcon: '#FFFFFF',
      border: '#BEDBB0',
    },

    background: {
      header: '#161616',
      dropdown: '#151515',
      
      sidemenu: '#121212',
      buttonPlus: '#BEDBB0',
      primaryButton: '#BEDBB0',
      primaryButtonPlus: '#161616',
      bord: '#1F1F1F',
    },
    text: {
      primary: '#FFFFFF',
    },
    hover: {
      inputAndIcon: '#BEDBB0',
      buttonPlus: '#9DC888',
      primaryButton: '#9DC888',
      iconLogOut: '#9DC888',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      buttonPlusIcon: '#121212',
      icon: '#BEDBB0',
      buttonPrimaryIcon: '#FFFFFF',
      border: '#BEDBB0',
    },

    background: {
      header: '#FCFCFC',
      dropdown: '#FCFCFC',
      sidemenu: '#FFF',
      buttonPlus: '#BEDBB0',
      primaryButton: '#BEDBB0',
      primaryButtonPlus: '#161616',
      bord: '#F6F6F7',
    },
    text: {
      primary: '#161616',
    },
    hover: {
      inputAndIcon: '#BEDBB0',
      buttonPlus: '#9DC888',
      primaryButton: '#9DC888',
      iconLogOut: '#9DC888',
    },
  },
});

const violetTheme = createTheme({
  palette: {
    primary: {
      main: '#5255BC',
      buttonPlusIcon: '#FFFFFF',
      icon: '#161616',
      buttonPrimaryIcon: '#FFFFFF',
      border: '#ECEDFD',
    },

    background: {
      header: '#FFFFFF',
      dropdown: '#FCFCFC',
      sidemenu: '#5255BC',
      buttonPlus: '#B8BCFD',
      primaryButton: '#5255BC',
      primaryButtonPlus: '#FFFFFF',
      bord: '#ECEDFD',
    },
    text: {
      primary: '#161616',
    },
    hover: {
      inputAndIcon: '#5255BC',
      buttonPlus: '#979CEA',
      primaryButton: '#7B7EDE',
      iconLogOut: '#B8BCFD',
    },
  },
});

export { darkTheme, lightTheme, violetTheme };

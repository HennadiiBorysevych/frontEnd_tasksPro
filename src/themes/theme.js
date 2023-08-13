import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#161616',
      buttonPlusIcon: '#121212',
      icon: '#BEDBB0',
      border: '#BEDBB0',
      iconLog: '#BEDBB0',
    },

    background: {
      header: '#161616',
      dropdown: '#151515',
      input: '#1F1F1F',
      sidemenu: '#121212',
      buttonPlus: '#BEDBB0',
      buttonPlusSecondary: '#1F1F1F',
      primaryButton: '#BEDBB0',
      primaryButtonPlus: '#161616',
      bord: '#1F1F1F',
      support: '#1F1F1F',
      popUp: '#151515',
      profile: '#BEDBB0',
      sideBarItem: '#1F1F1F',
      cardItem: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#161616',
      sidemenu: '#FFFFFF',
      plus: '#FFFFFF',
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
      border: '#BEDBB0',
      iconLog: '#BEDBB0',
    },

    background: {
      header: '#FCFCFC',
      dropdown: '#FCFCFC',
      input: '#FCFCFC',
      sidemenu: '#FFFFFF',
      buttonPlusSecondary: '#F6F6F7',
      buttonPlus: '#BEDBB0',
      primaryButton: '#BEDBB0',
      primaryButtonPlus: '#161616',
      bord: '#F6F6F7',
      support: '#F6F6F7',
      popUp: '#FCFCFC',
      profile: '#BEDBB0',
      sideBarItem: '#F6F6F7',
      cardItem: '#FFFFFF',
    },
    text: {
      primary: '#161616',
      secondary: '#161616',
      sidemenu: '#161616',
      plus: '#FFFFFF',
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
      border: '#ECEDFD',
      iconLog: '#FFFFFF',
    },

    background: {
      header: '#FFFFFF',
      dropdown: '#FCFCFC',
      input: '#FCFCFC',
      sidemenu: '#5255BC',
      buttonPlus: '#B8BCFD',
      buttonPlusSecondary: '#B8BCFD',
      primaryButton: '#5255BC',
      primaryButtonPlus: '#FFFFFF',
      bord: '#ECEDFD',
      support: '#ECEDFD66',
      popUp: '#FCFCFC',
      profile: '#ECEDFD',
      sideBarItem: '#FFFFFF80',
      cardItem: '#FFFFFF',
    },
    text: {
      primary: '#161616',
      secondary: '#FFFFFF',
      sidemenu: '#FFFFFF',
      plus: '#161616',
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

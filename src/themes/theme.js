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
      input: '#1F1F1F', //---!---
      sidemenu: '#121212',
      buttonPlus: '#BEDBB0',
      buttonPlusSecondary: '#1F1F1F', //---!---
      buttonPlusCard: '#FFFFFF',
      primaryButton: '#BEDBB0',
      primaryButtonPlus: '#161616',
      bord: '#1F1F1F',
      support: '#1F1F1F',
      popUp: '#151515',
      profile: '#BEDBB0',
      sideBarItem: '#1F1F1F',
      cardItem: '#121212',
      scroll: '#FFFFFF1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#161616',
      sidemenu: '#FFFFFF', //---!---
      plus: '#FFFFFF', //---!---
    },
    hover: {
      inputAndIcon: '#BEDBB0',
      buttonPlus: '#9DC888',
      primaryButton: '#9DC888',
      iconLogOut: '#9DC888',
    },
  },
  calendar: {
    //---!---
    senseColor: '#bedbb0',
    color: '#FFF',
    backColor: '#1f1f1f',
    activeColor: '#1F1F1F',
    weekColor: '#ffffff80',
    disColor: '#ffffff80',
    hovColor: '#ffffff33',
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
      input: '#FCFCFC', //--modal!---
      sidemenu: '#FFFFFF',
      buttonPlusSecondary: '#F6F6F7', //---!---
      buttonPlusCard: '#161616',
      buttonPlus: '#BEDBB0',
      primaryButton: '#BEDBB0',
      primaryButtonPlus: '#161616',
      bord: '#F6F6F7',
      support: '#F6F6F7',
      popUp: '#FCFCFC',
      profile: '#BEDBB0',
      sideBarItem: '#F6F6F7',
      cardItem: '#FFFFFF',
      scroll: 'e8e8e8', //----!--- (not all)
    },
    text: {
      primary: '#161616',
      secondary: '#161616',
      sidemenu: '#161616',
      plus: '#FFFFFF', //----?-----
    },
    hover: {
      inputAndIcon: '#BEDBB0',
      buttonPlus: '#9DC888',
      primaryButton: '#9DC888',
      iconLogOut: '#9DC888',
    },
  },
  calendar: {
    //----!----
    senseColor: '#bedbb0',
    color: '#161616',
    backColor: '#FFF',
    activeColor: '#161616',
    weekColor: '#16161680',
    disColor: '#16161680',
    hovColor: '#16161633',
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
      input: '#FCFCFC', //---modal---
      sidemenu: '#5255BC',
      buttonPlus: '#B8BCFD',
      buttonPlusSecondary: '#B8BCFD',
      buttonPlusCard: '#5255BC',
      primaryButton: '#5255BC',
      primaryButtonPlus: '#FFFFFF',
      bord: '#ECEDFD',
      support: '#ECEDFD66',
      popUp: '#FCFCFC',
      profile: '#ECEDFD',
      sideBarItem: '#FFFFFF80',
      cardItem: '#FFFFFF',
      scroll: '#B8BCFD',
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
  calendar: {
    //---!----
    senseColor: '#5255BC',
    color: '#161616',
    backColor: '#FFF',
    activeColor: '#FCFCFC',
    weekColor: '#16161680',
    disColor: '#16161680',
    hovColor: '#16161633',
  },
});

export { darkTheme, lightTheme, violetTheme };

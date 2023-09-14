import { ButtonPlus, Typography } from 'ui';

import styled from '@emotion/styled';

export const SideBarWrapper = styled.div(
  {
    padding: '24px 0',
    width: '225px',
    height: '100vh',
    overflow: 'auto',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  props => ({
    backgroundColor: props.theme.palette.background.sidebar,
    color: props.theme.palette.text.sidebarPrimary,
    left: props.isOpen ? '0' : '-225px',

    [props.theme.breakpoints.down('medium')]: {
      left: props.isOpen ? '0' : '-225px',
    },

    [props.theme.breakpoints.up('medium')]: {
      width: '260px',
    },

    [props.theme.breakpoints.between('medium', 'large')]: {
      left: props.isOpen ? '0' : '-260px',
    },

    [props.theme.breakpoints.down('large')]: {
      position: 'fixed',
      top: '0',
      transition: 'left 0.4s ease-in-out',
      zIndex: '1000',
      height: props.isOpen && `100vh`,
      overflowY: props.isOpen && 'auto',
      maxHeight: props.isOpen && '100vh',
    },
  })
);

export const SideBarContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'calc(100vh - 48px)',
});

export const Overlay = styled.div(({ theme }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.backdrop,
  zIndex: 999,
}));

export const TitleBoardList = styled(Typography)(({ theme }) => ({
  marginTop: '70px',
  marginBottom: '8px',
  color: theme.palette.text.sidebarSecondary,
  padding: '0 14px',

  [theme.breakpoints.up('medium')]: {
    marginTop: '60px',
    padding: '0 24px',
  },
}));

export const CreateBoard = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderTop: `1px solid ${theme.palette.background.createBoardBorder}`,
  borderBottom: `1px solid ${theme.palette.background.createBoardBorder}`,
  padding: '14px',
  marginBottom: '40px',
  transition: 'box-shadow 0.3s, transform 0.3s',
  fontFamily: 'inherit',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.28px',

  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.02)',
  },

  [theme.breakpoints.up('medium')]: {
    padding: '14px 24px',
  },
}));

export const TitleButton = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  text-align: left;
`;

export const CreateBoardPlus = styled(ButtonPlus)(props => ({
  '&:hover': {
    backgroundColor: props.theme.palette.background.buttonPlusHoverSideBar,
  },
}));

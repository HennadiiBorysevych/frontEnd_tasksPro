import { Typography } from 'ui';

import styled from '@emotion/styled';

export const SideBarWrapper = styled.div(
  {
    padding: '24px 0',
    width: '225px',
    height: '100vh',
    overflow: 'auto',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  ({ theme, isOpen }) => ({
    backgroundColor: theme.palette.background.sidebar,
    color: theme.palette.text.sidebarPrimary,
    left: isOpen ? '0' : '-225px',

    [theme.breakpoints.down('medium')]: {
      left: isOpen ? '0' : '-225px',
    },

    [theme.breakpoints.up('medium')]: {
      width: '260px',
    },

    [theme.breakpoints.between('medium', 'large')]: {
      left: isOpen ? '0' : '-260px',
    },

    [theme.breakpoints.down('large')]: {
      position: 'fixed',
      top: '0',
      transition: 'left 0.4s ease-in-out',
      zIndex: '1000',
      height: isOpen && `100vh`,
      overflowY: isOpen && 'auto',
      maxHeight: isOpen && '100vh',
    },
  })
);

export const SideBarContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'calc(100vh - 48px)',
});

export const Overlay = styled.div(
  {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: 999,
  },
  ({ theme }) => ({
    backgroundColor: theme.palette.background.backdrop,
  })
);

export const TitleBoardList = styled(Typography)(
  {
    marginTop: '70px',
    marginBottom: '8px',
    padding: '0 14px',
  },
  ({ theme }) => ({
    color: theme.palette.text.sidebarSecondary,
    [theme.breakpoints.up('medium')]: {
      marginTop: '60px',
      padding: '0 24px',
    },
  })
);

export const CreateBoard = styled.button(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
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
  },
  ({ theme }) => ({
    borderTop: `1px solid ${theme.palette.background.createBoardBorder}`,
    borderBottom: `1px solid ${theme.palette.background.createBoardBorder}`,
    [theme.breakpoints.up('medium')]: {
      padding: '14px 24px',
    },
  })
);

export const TitleButton = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  text-align: left;
`;

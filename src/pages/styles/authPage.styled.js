import { NavLink } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { BASE_COLORS } from 'constants';

import styled from '@emotion/styled';

export const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTabs-flexContainer': {
    display: 'flex',
    gap: '14px',
    border: 'none',
    marginBottom: '40px',

    '@media screen and(min-width: 768px)': {
      paddingBottom: '40px',
    },
  },
});

export const StyledTab = styled(props => <Tab disableRipple {...props} />)(
  () => ({
    textTransform: 'none',
    borderRadius: 'none',
    padding: '0px',
    margin: '0px',

    minWidth: '0px',
    minHeight: '0px',

    color: `${BASE_COLORS.authColors.textSecondaryDark}`,
    fontFamily: 'inherit',
    fontSize: '18px',
    fontWeight: '500',
    fontHeight: '27px',

    '&:hover': {
      color: `${BASE_COLORS.authColors.textSecondary}`,
      opacity: 1,
    },
    '&.Mui-selected': {
      color: `${BASE_COLORS.authColors.textSecondary}`,
    },
  })
);

export const AuthContainer = styled.div(
  {
    position: 'relative',
    width: '100%',
    padding: '24px',
    backgroundColor: BASE_COLORS.authColors.form,
    borderRadius: '8px',
  },
  props => ({
    [props.theme.breakpoints.down('medium')]: {
      maxWidth: '335px',
    },
    [props.theme.breakpoints.up('medium')]: {
      padding: '40px',
      width: '424px',
    },
  })
);

export const Password = styled(NavLink)(
  {
    display: 'block',
    fontSize: '12px',
    color: BASE_COLORS.authColors.textSecondary,
  },
  props => ({
    [props.theme.breakpoints.down('medium')]: {
      marginBottom: '20px',
      textAlign: 'center',
    },
    [props.theme.breakpoints.up('medium')]: {
      position: 'absolute',
      top: '41px',
      fontSize: '14px',
      right: '40px',
    },
  })
);

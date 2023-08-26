import { NavLink } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { media } from 'helpers';

import styled from '@emotion/styled';

export const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-flexContainer': {
    display: 'flex',
    gap: '14px',
    border: 'none',
    paddingBottom: '40px',
  },
});

export const StyledTab = styled(props => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    borderRadius: 'none',
    padding: '0px',
    margin: '0px',

    minWidth: '0px',
    minHeight: '0px',

    color: 'gray',
    fontFamily: 'inherit',
    fontSize: '18px',
    fontWeight: '500',
    fontHeight: '27px',

    '&:hover': {
      color: '#fff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: 'white',
    },
  })
);

export const AuthContainer = styled.div`
  position: relative;

  width: 100%;
  padding: 24px;

  background-color: var(--bgColorAuth);
  border-radius: 8px;

  ${media.MEDIUM`
  padding: 40px;
  width: 424px;
  `}
`;

export const Password = styled(NavLink)`
  position: absolute;
  top: 30px;
  right: 60px;

  color: white;
  width: min-content;
`;

export const TabsContainer = styled.div`
  padding-bottom: 40px;
  list-style: none;
  text-decoration: none;
  color: white;
`;
export const AppName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  margin-top: 24px;
`;

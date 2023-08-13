import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

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
  width: 100%;
  padding: 24px;

  background-color: var(--bgColorAuth);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 424px;
  }
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

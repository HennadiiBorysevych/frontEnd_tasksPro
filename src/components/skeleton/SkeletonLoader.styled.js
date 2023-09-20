import { BASE_COLORS } from 'constants';

import styled from '@emotion/styled';

// WELCOME PAGE
export const Background = styled.section`
  position: relative;
  background-image: ${BASE_COLORS.authColors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const BackgroundLogin = styled.section`
  position: relative;
  background-image: ${BASE_COLORS.authColors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const BackgroundHome = styled.section`
  height: 60px;
  width: 100%;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
  margin-top: 24px;
  justify-content: flex-start;
  align-items: start;
`;

export const Header = styled.header(
  {
    display: 'flex',
    width: '100%',
    height: '60px',
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: '20px',
  },
  props => ({
    backgroundColor: props.baseColor,
  })
);

export const SideBar = styled.aside(
  {
    height: '100vh',
    width: '260px',
    position: 'fixed',
    zIndex: '10',
  },
  props => ({
    backgroundColor: props.baseColor,
  })
);

export const Logo = styled.div(
  {
    width: '30px',
    height: '120px',
  },
  props => ({
    [props.theme.breakpoints.up('large')]: {
      width: '115px',
      height: '34px',
    },
  })
);

export const Theme = styled.div(
  {
    width: '65px',
    height: '68px',
  },
  props => ({
    [props.theme.breakpoints.up('large')]: {
      width: '115px',
      height: '68px',
    },
  })
);

export const UserPic = styled.div`
  width: 32px;
  height: 32px;
`;

export const UserName = styled.div(
  {
    width: '65px',
    height: '68px',
  },
  props => ({
    [props.theme.breakpoints.up('large')]: {
      width: '115px',
      height: '68px',
    },
  })
);

export const BoardBody = styled.div(
  {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
  },
  props => ({
    backgroundColor: props.baseColor,
  })
);

export const ProjectName = styled.div(
  {
    width: '80%',
    height: '21px',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      width: '90%',
      height: '40px',
    },
  })
);

export const Filters = styled.div(
  {
    width: '40px',
    height: '2px',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      width: '60px',
      height: '30px',
    },
  })
);

export const Button = styled.div(
  {
    marginTop: '30px',
    width: '80%',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      width: '80%',
    },
  })
);

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const ColumnsList = styled.div(
  {
    position: 'fixed',
    width: 'calc(100vw - 64px)',
    maxHeight: 'calc(100vh - 32px)',
    marginBottom: '32px',
  },
  props => ({
    backgroundColor: props.baseColor,
  })
);

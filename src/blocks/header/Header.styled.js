import styled from '@emotion/styled';

const HeaderBox = styled.div(
  {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '14px 20px',
  },
  props => ({
    color: props.theme.palette.text.primary,
    backgroundColor: props.theme.palette.background.header,

    [props.theme.breakpoints.up('medium')]: {
      padding: '18px 32px',
    },
    [props.theme.breakpoints.up('large')]: {
      padding: '18px 24px',
      justifyContent: 'flex-end',
    },
  })
);

const SideBarButton = styled.button(props => ({
  [props.theme.breakpoints.up('large')]: {
    display: 'none',
  },
}));

const UserSettings = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const styles = {
  HeaderBox,
  SideBarButton,
  UserSettings,
};

export default styles;

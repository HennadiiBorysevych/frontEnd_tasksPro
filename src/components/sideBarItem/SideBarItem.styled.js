import Typography from 'components/typography/Typography';

import styled from '@emotion/styled';

export const BoardListItem = styled.li(props => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: props.isActive
    ? props.theme.palette.background.sideBarItem
    : props.theme.palette.background.sidemenu + '80',
  padding: '0 24px',
  // marginTop: props.isActive ? '4px' : '0',
  '& + &': {
    marginTop: '4px',
  },

  ...(props.isActive && {
    '&::after': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '4px',
      backgroundColor: props.theme.palette.primary.iconLog,
      borderRadius: '4px 0px 0px 4px',
    },
  }),
}));

export const BoardName = styled(Typography)(props => ({
  lineHeight: 1.25,
  color: props.isActive
    ? props.theme.palette.text.sidemenu
    : props.theme.palette.text.sidemenu + '80',

  '&:hover': {
    color: props.theme.palette.hover.primaryButton,
  },
}));

export const BoardIdentificationItem = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 20px 0;
  cursor: pointer;
`;

export const BoardItemControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

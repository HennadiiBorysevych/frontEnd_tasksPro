import styled from '@emotion/styled/macro';

import { SvgIcon, Typography } from 'ui';

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownIcon = styled(SvgIcon)``;
export const DropdownTitle = styled(Typography)``;

export const DropdownButton = styled.button(props => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  [DropdownIcon]: {
    transition: 'transform 0.4s ease',
    transform: props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  },
  '&:hover': {
    [DropdownTitle]: {
      color: props.theme.palette.accent.light,
    },
    [DropdownIcon]: {
      stroke: props.theme.palette.accent.light,
    },
  },
}));

export const DropdownMenu = styled.ul(props => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: 2,

  width: '100px',
  padding: '18px',
  borderRadius: '8px',
  border: `1px solid ${props.theme.palette.background.buttonPlusAvatar}`,
  background: props.theme.palette.background.modal,
  boxShadow: '0px 4px 16px 0px rgba(17, 17, 17, 0.1)',
}));

export const DropdownItem = styled(Typography)(props => ({
  '& + &': {
    marginTop: '4px',
  },

  '&:hover': {
    cursor: 'pointer',
  },

  '&.selected': {
    color: props.theme.palette.accent.main,
  },
}));

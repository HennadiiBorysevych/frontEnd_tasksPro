import styled from '@emotion/styled/macro';

import { SvgIcon } from 'ui';

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownIcon = styled(SvgIcon)``;

export const DropdownButton = styled.button(props => ({
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '-0.28px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  [DropdownIcon]: {
    transition: 'transform 0.4s ease',
    transform: props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  },
  '&:hover': {
    color: props.theme.palette.accent.light,
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

export const DropdownItem = styled.li(props => ({
  color: props.theme.palette.text.themeMenuItems,
  fontSize: '14px',
  letterSpacing: '-0.28px',

  '& + &': {
    marginTop: '4px',
  },

  '&.selected': {
    color: props.theme.palette.accent.main,
  },

  '&:hover': {
    cursor: 'pointer',
  },
}));

import styled from '@emotion/styled';

export const ButtonSignOut = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 24px;
  width: 100%;
`;

export const TextSignOut = styled.span(props => ({
  display: 'block',
  fontSize: '14px',
  fontWeight: 500,
  color: props.theme.palette.text.sidebarPrimary,
  transition: 'box-shadow 0.3s, transform 0.3s',

  '&:hover': {
    color: props.theme.palette.icon.signOut,
    transform: 'scale(1.02)',
  },
}));

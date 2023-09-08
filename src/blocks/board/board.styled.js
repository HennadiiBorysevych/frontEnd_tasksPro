import styled from '@emotion/styled';

export const ContainerWrapper = styled.div(
  {
    display: 'flex',
    flexWrap: 'nowrap',
    paddingBottom: '24px',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      paddingBottom: '52px',
    },
    [props.theme.breakpoints.up('large')]: {
      paddingBottom: '16px',
    },
  })
);

export const ColumnsContainer = styled.ul(
  {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '28px',
    marginRight: '21px',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      gap: '34px',
    },
  })
);

export const ButtonAddColumn = styled.button(props => ({
  backgroundColor: props.theme.palette.background.card,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '334px',
  justifyContent: 'center',
  padding: '14px 0',
  borderRadius: '8px',
  cursor: 'pointer',

  color: props.theme.palette.text.primary,
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '-0.28px',
  transition: 'box-shadow 0.3s, transform 0.3s',

  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.02)',
  },
}));

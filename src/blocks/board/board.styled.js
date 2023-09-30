import styled from '@emotion/styled';

export const ContainerWrapper = styled.div({
  display: 'flex',
  flexWrap: 'nowrap',
});

export const ColumnsContainer = styled.div(
  {
    display: 'flex',
    gap: '8px',
  },
  props => ({
    marginRight: props.columns.length > 0 ? '8px' : 0,
    [props.theme.breakpoints.up('medium')]: {
      gap: '18px',
      marginRight: props.columns.length > 0 ? '18px' : 0,
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

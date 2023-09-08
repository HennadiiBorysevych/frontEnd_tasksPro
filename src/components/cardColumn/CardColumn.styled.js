import styled from '@emotion/styled';

export const Column = styled.li(
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    transition: 'filter 0.4s ease-in-out',
  },
  props => ({
    filter: props.isLoading ? 'blur(25px)' : 'none',

    [props.theme.breakpoints.down('small')]: {
      width: 'calc(100vw - 40px)',
    },
    [props.theme.breakpoints.up('small')]: {
      width: '335px',
    },
  })
);

export const ColumnHeading = styled.div(
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 20px 17px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  props => ({
    backgroundColor: props.theme.palette.background.card,
  })
);

export const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 100px;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

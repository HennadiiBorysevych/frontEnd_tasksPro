import styled from '@emotion/styled';

export const Column = styled.li(
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    height: '100%',
  },
  props => ({
    [props.theme.breakpoints.down('small')]: {
      maxWidth: '335px',
      width: '100%',
    },
    [props.theme.breakpoints.up('small')]: {
      width: '351px',
      maxHeight: 'calc(100vh - 198px)',
    },
    [props.theme.breakpoints.up('medium')]: {
      maxHeight: 'calc(100vh - 248px)',
    },
    [props.theme.breakpoints.up('large')]: {
      maxHeight: 'calc(100vh - 156px)',
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
    cursor: 'grabbing',
    width: '335px',
  },
  props => ({
    backgroundColor: props.theme.palette.background.card,
  })
);

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 100px;
  width: 351px;
`;

export const DraggableItem = styled.div`
  width: 335px;
`;

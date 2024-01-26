import styled from '@emotion/styled';

export const BackgroundHome = styled.section(
  {
    height: 60,
    width: '100%',
  },
  ({ variantLoader }) => ({
    position: variantLoader === 'board' && 'absolute',
    left: variantLoader === 'board' && 275,
    top: variantLoader === 'board' && 70,
    maxWidth: variantLoader === 'board' && '77%',
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

export const UserSettings = styled.div({
  display: 'flex',
  gap: '10px',
});

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

export const UserPic = styled.div`
  width: 32px;
  height: 32px;
`;

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

export const BoardHead = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

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

export const Column = styled.div({
  display: 'flex',
  gap: '30px',
  marginTop: 6,
  justifyContent: 'space-between',
});

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const ColumnWrapper = styled.div({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
});

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

export const CardColumn = styled.div({
  display: 'flex',
  gap: '10px',
  width: '335px',
  justifyContent: 'space-between',
});

export const CardList = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

// export const Filters = styled.div(
//   {
//     width: '40px',
//     height: '2px',
//   },
//   props => ({
//     [props.theme.breakpoints.up('medium')]: {
//       width: '60px',
//       height: '30px',
//     },
//   })
// );

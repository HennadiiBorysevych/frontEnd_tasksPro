import styled from '@emotion/styled';

export const SpanStyled = styled.span(
  ({ width, height, variantIcon, theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    width: width ? `${width}px` : '28px',
    height: height ? `${height}px` : '28px',
    backgroundColor:
      variantIcon === 'sidemenu'
        ? theme.palette.background.buttonPlusSideBar
        : variantIcon === 'addColumn'
        ? theme.palette.background.buttonPlusSecondary
        : variantIcon === 'addAvatar'
        ? theme.palette.background.buttonPlusAvatar
        : theme.palette.background.buttonPlus,
    transition: 'all 250ms linear',
    cursor: 'pointer',
  })
);

import styled from '@emotion/styled';

export const LogoWrapper = styled.div(({ variantLogo, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: variantLogo === 'welcome' ? 'center' : 'flex-start',
  gap: variantLogo === 'welcome' ? '14px' : '8px',
  marginTop: variantLogo === 'welcome' ? '14px' : '0',
  padding: variantLogo === 'welcome' ? '0' : '0 14px',

  [theme.breakpoints.up('medium')]: {
    padding: variantLogo === 'welcome' ? '0' : '0 24px',
  },
}));

export const ProjectIcon = styled.svg(
  {
    fill: 'none',
  },
  ({ theme, variantLogo }) => ({
    width: variantLogo === 'board' ? 32 : 40,
    height: variantLogo === 'board' ? 32 : 40,
    [theme.breakpoints.up('medium')]: {
      width: variantLogo === 'welcome' && 48,
      height: variantLogo === 'welcome' && 48,
    },
  })
);

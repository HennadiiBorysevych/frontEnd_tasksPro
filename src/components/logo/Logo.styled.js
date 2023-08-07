import styled from '@emotion/styled';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ isWelcomePage }) => (isWelcomePage ? '8px' : '14px')};
`;

export const AppName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

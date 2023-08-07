import styled from '@emotion/styled';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ variant }) => (variant === 'welcome' ? '14px' : '8px')};
`;

export const Welcome = styled.h1`
  color: #161616;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1.12px;

  @media (min-width: 768px) {
    font-size: 40px;
    letter-spacing: -1.6px;
  }
`;

export const Bord = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.64px;
`;

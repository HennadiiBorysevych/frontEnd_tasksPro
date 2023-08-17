import { NavLink } from 'react-router-dom';
import { media } from 'helpers';

import styled from '@emotion/styled';

export const WelcomeContainer = styled.div`
  width: 100%;
  text-align: center;

  ${media.MEDIUM`
  width: 473px;
  `}
`;

export const UserImage = styled.img`
  margin-bottom: 14px;
  margin: 0 auto;

  ${media.MEDIUM`
  width: 162px;
    height: 162px;
    margin-bottom: 24px;
  `}
`;

export const WelcomeText = styled.p`
  font-weight: 400;
  font-size: 14px;

  margin-top: 24px;
  margin-bottom: 48px;
  line-height: 1.28;
  letter-spacing: -0.28px;
`;

export const RegisterLink = styled(NavLink)`
  padding: 14px 0;
  width: 100%;
  display: block;
  background-color: var(--bgColorAuth);
  border-radius: 8px;
  color: #ffffff;
  margin-bottom: 14px;

  ${media.MEDIUM`
  width: 344px;
    margin-left: auto;
    margin-right: auto;
  `}
`;

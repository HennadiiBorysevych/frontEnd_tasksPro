import { media } from 'helpers';

import styled from '@emotion/styled';

export const PasswordContainer = styled.div`
  position: relative;

  width: 100%;
  padding: 24px;

  background-color: var(--bgColorAuth);
  border-radius: 8px;

  ${media.MEDIUM`
  padding: 40px;
  width: 424px;
  `}
`;

export const Title = styled.h4(props => ({
  margin: ' 0 0 24px 0',
  fontSize: '18px',
  color: props.theme.palette.text.primary,
}));

import { css } from '@emotion/react';

import styled from '@emotion/styled';

export const BoardListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121212;

  & + & {
    margin-top: 4px;
  }
  ${props =>
    props.isActive &&
    css`
      background-color: #1f1f1f;
    `}

  &::after {
    ${props =>
      props.isActive &&
      css`
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 4px;
        background-color: #bedbb0;
        border-radius: 4px 0px 0px 4px;
      `}
  }
`;

export const AfterPseudoElement = styled.div``;

export const BoardName = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.28px;
  color: ${({ isActive }) =>
    isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'};
`;

export const BoardIdentificationItem = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 20px 0;
  cursor: pointer;
`;

export const BoardItemControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

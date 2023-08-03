import styled from '@emotion/styled';

export const SpanStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props =>
    props.width ? `${props.width}px` :  '28px'};
  height: ${props =>
    props.height
      ? `${props.height}px`
      : '28px'};
  border-radius: 8px;
  background-color: #161616;
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

import styled from '@emotion/styled';

export const SpanStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
    border-radius: 8px;
  width: ${props => (props.width ? `${props.width}px` : '28px')};
  height: ${props => (props.height ? `${props.height}px` : '28px')};
  stroke: ${props => (props.stroke ? `${props.stroke}` : '#ffffff')};
  background-color: ${props =>
    props.backgroundColor ? `${props.backgroundColor}` : '#161616'};
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

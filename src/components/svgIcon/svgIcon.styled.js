import styled from '@emotion/styled';

export const SvgStyled = styled.svg`
  stroke: ${props => props.stroke};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
`;

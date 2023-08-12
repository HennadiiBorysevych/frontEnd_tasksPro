import styled from '@emotion/styled';

export const SvgStyled = styled.svg`
  stroke: ${props =>
    props.stroke ? props.stroke : `${props.theme.palette.text.primary}CC`};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
`;

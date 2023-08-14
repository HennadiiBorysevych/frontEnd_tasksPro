import styled from '@emotion/styled';

export const BoardDecor = styled.div`
  margin-bottom: 40px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(8 * 32px);

  & + & {
    margin-top: 24px;
  }
`;

export const RadioField = styled.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;

  &:hover ~ .background-label,
  &:checked ~ .background-label {
    outline: 1px solid ${props => props.theme.palette.hover.inputAndIcon};
  }

  &:hover ~ .icon-label,
  &:checked ~ .icon-label {
    color: rgba(255, 255, 255, 0.1);
  }
`;

export const IconContainer = styled.div`
  color: rgba(255, 255, 255, 0.1);
  margin-right: 8px;
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;

export const BoardText = styled.p`
  width: 100%;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: ${props => props.theme.palette.text.primary};
`;

export const BackgroundImage = styled.div(props => ({
  height: '28px',
  width: '28px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: '7px',
  cursor: 'pointer',
  margin: '2px',
  backgroundImage: `url(${props.bgIndex.regular})`,
  border: $props =>
    props.isActive ? `1px solid ${props.theme.palette.primary.main}` : 'none',
  '@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)':
    {
      backgroundImage: `url(${props.bgIndex.x2})`,
    },
  '@media (min-device-pixel-ratio: 3), (min-resolution: 288dpi), (min-resolution: 3dppx)':
    {
      backgroundImage: `url(${props.bgIndex.x3})`,
    },
}));

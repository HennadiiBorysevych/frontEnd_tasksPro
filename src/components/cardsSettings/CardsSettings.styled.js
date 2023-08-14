import styled from '@emotion/styled';

const hexToRgb = hex => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

export const SettingsBlock = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  display: block;
  color: ${props => props.theme.palette.text.primary};
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: -0.24px;

  & + & {
    margin-top: 14px;
  }
`;

export const Priority = styled.div`
  margin-top: 4px;
  display: flex;
  gap: 8px;
`;

export const Radio = styled.input`
  position: relative;
  visibility: hidden;
  cursor: pointer;
  &::after {
    visibility: visible;
    top: 0;
    left: 0;
    z-index: 10;
    position: absolute;
    content: '';
    border-radius: 50%;
    padding: 5px;
    display: block;
    width: 14px;
    height: 14px;
    ${props => {
      switch (props.value) {
        case 'Low':
          return `background-color: #8fa1d0}`;
        case 'Medium':
          return `background-color: #e09cb5`;
        case 'High':
          return `background-color: #bedbb0`;
        case 'Without':
          return `background-color: rgba(${hexToRgb(
            props.theme.palette.text.primary
          )}, 0.30)`;
        default:
          return;
      }
    }}
  }
  &:checked {
    &::after {
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      content: '';
      border-radius: 50%;
      display: block;
      width: 7px;
      height: 7px;
      padding: 0;
    }

    &:checked {
      &::before {
        visibility: visible;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        content: '';
        border-radius: 50%;
        width: 14px;
        height: 14px;
        border: 1px solid;
        background-color: transparent;
        ${props => {
          switch (props.value) {
            case 'Low':
              return `border-color: #8fa1d0`;
            case 'Medium':
              return `border-color: #e09cb5`;
            case 'High':
              return `border-color: #bedbb0`;
            case 'Without':
              return `border-color: rgba(${hexToRgb(
                props.theme.palette.text.primary
              )}, 0.30)`;
            default:
              return;
          }
        }}
      }
    }
  }
`;

import styled from '@emotion/styled';

export const SettingsBlock = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-family: 'Poppins';
  line-height: 1.25;
  letter-spacing: -0.24px;
  margin-bottom: 14px;
`;

export const Priority = styled.div`
  margin-top: 4px;
  display: flex;
  gap: 8px;
`;

export const Radio = styled.input`
  position: relative;
  visibility: hidden;
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
        case 'low':
          return `background-color: #8fa1d0}`;
        case 'medium':
          return `background-color: #e09cb5`;
        case 'high':
          return `background-color: #bedbb0`;
        case 'without':
          return `background-color: rgba(255, 255, 255, 0.3)`;
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
            case 'low':
              return `border-color: #8fa1d0`;
            case 'medium':
              return `border-color: #e09cb5`;
            case 'high':
              return `border-color: #bedbb0`;
            case 'without':
              return `border-color: rgba(255, 255, 255, 0.3)`;
            default:
              return;
          }
        }}
      }
    }
  }
`;

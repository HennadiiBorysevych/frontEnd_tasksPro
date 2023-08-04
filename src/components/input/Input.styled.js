import styled from '@emotion/styled';

export const CommonInputStyles = `
width: calc(100%);
  height: 49px;
  padding: 14px 18px;
  
  border-radius: 8px;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  opacity: 0.4;

  outline: none;
  transition: all 150ms ease;

  font-size: 14px;
  letter-spacing: -0.28px;
  color: #ffffff;

  &::placeholder {
    color: #fff;
    font-size: 14px;
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const InputStyled = styled.input`
  ${CommonInputStyles};
  background: ${props =>
    props.background ? `${props.background}` : '#1f1f1f'};
`;

export const TextareaStyled = styled.textarea`
  ${CommonInputStyles};
  resize: none;
  overflow: auto;
  height: ${props => (props.height ? `${props.height}px` : '154px')};
  background: ${props =>
    props.background ? `${props.background}` : '#1f1f1f'};
`;

export const PasswordWrapperIcon = styled.span`
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 14px;
  right: 18px;
  color: #fff;
  opacity: 0.4;
`;

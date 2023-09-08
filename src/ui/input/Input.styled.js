import SvgIcon from '../svgIcon/SvgIcon';

import styled from '@emotion/styled';

export const CommonInputStyles = `
position: relative;

width: calc(100%);
height: 49px;
padding: 14px 18px;
  
border-radius: 8px;
 
box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08); 
opacity: 0.4;

outline: none;
transition: all 150ms ease;

font-size: 14px;
letter-spacing: -0.28px;
font-family: inherit;

&::placeholder {
  font-size: 14px;
  letter-spacing: -0.28px;
}

&:focus {
  opacity: 1;
}
`;

export const InputStyled = styled.input(props => ({
  CommonInputStyles,
  background: props.theme.palette.background.input,
  border: `1px solid ${props.theme.palette.accent.main}`,
  color: props.theme.palette.text.primary,

  '&::placeholder': {
    color: props.theme.palette.text.primary,
  },
}));

export const TextareaStyled = styled.textarea(props => ({
  CommonInputStyles,
  resize: 'none',
  overflow: 'auto',

  height: props.height ? `${props.height}px` : '154px',
  background: props.theme.palette.background.input,
  border: `1px solid ${props.theme.palette.accent.main}`,
  color: props.theme.palette.text.primary,

  '&::placeholder': {
    color: props.theme.palette.text.primary,
  },
}));

export const InputUnit = styled.div`
  position: relative;
`;

export const PasswordWrapperIcon = styled.span(props => ({
  width: '18px',
  height: '18px',
  position: 'absolute',
  bottom: '14px',
  right: '18px',
  color: props.theme.palette.text.primary,
  opacity: 0.4,
}));

export const PasswordInputWrapper = styled.div`
  position: relative;
`;

export const PasswordEyeIcon = styled(SvgIcon)(props => ({
  fill: props.theme.palette.icon.primary,
  stroke: 'none',
}));

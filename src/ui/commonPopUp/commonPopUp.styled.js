import { baseColors } from 'constants';

import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputList = styled.ul`
  width: 100%;
`;

export const InputItem = styled.li`
  & + & {
    margin-top: 14px;
  }
`;

export const ErrorMessage = styled.span(props => ({
  display: 'block',
  marginTop: '10px',
  color:
    props.variant === 'authForm'
      ? baseColors.authColors.textSecondary
      : props.theme.palette.text.primary,
}));

import { baseColors } from 'constants';

import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ErrorMessage = styled.span(props => ({
  color:
    props.variant === 'authForm'
      ? baseColors.authColors.textSecondary
      : props.theme.palette.text.primary,
}));

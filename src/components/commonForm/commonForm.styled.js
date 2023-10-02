import { BASE_COLORS } from 'constants';

import { Typography } from 'ui';

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

export const ErrorMessage = styled(Typography)(props => ({
  display: 'block',
  marginTop: '10px',
  color:
    props.variantMessage === 'authForm'
      ? BASE_COLORS.authColors.textSecondary
      : props.theme.palette.text.primary,
}));

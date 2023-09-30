import { Typography } from 'ui';

import styled from '@emotion/styled';

export const SettingsList = styled.ul`
  width: 100%;
  margin-top: 24px;
`;

export const SettingsItem = styled.li`
  & + & {
    margin-top: 14px;
  }
`;

export const SettingTitle = styled(Typography)(props => ({
  color: props.theme.palette.text.primaryMedium,
  marginBottom: '4px',
}));

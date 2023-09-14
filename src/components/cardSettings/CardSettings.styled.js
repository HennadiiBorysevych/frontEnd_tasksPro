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

export const SettingTitle = styled.p(props => ({
  color: props.theme.palette.text.primaryMedium,
  fontSize: '12px',
  letterSpacing: '-0.24px',
  marginBottom: '4px',
}));

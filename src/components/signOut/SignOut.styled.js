import styled from '@emotion/styled';

export const ButtonSignOut = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 10px;
  width: 100%;
`;

export const TextSignOut = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;
  color: ${props => props.theme.palette.text.sidemenu};
`;

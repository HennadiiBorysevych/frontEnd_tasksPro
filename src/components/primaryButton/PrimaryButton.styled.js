import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  display: flex;
  gap: 8px;
  width: 100%;
  padding: 10px 0px 11px 0px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  background-color: ${props => props.theme.palette.background.primaryButton};
  color: ${props => props.theme.palette.text.primary};

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;

  &:hover {
    background-color: ${props => props.theme.palette.hover.primaryButton};
  }
`;

import styled from '@emotion/styled';

export const ButtonAddColumn = styled.button`
  background-color: ${props => props.theme.palette.background.cardItem};
  display: flex;
  align-items: center;
  gap: 8px;
  width: 334px;
  justify-content: center;
  padding: 14px 0;
  border-radius: 8px;
  cursor: pointer;

  color: ${props => props.theme.palette.text.primary};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;

  &:hover {
    opacity: 0.9;
  }
`;

export const SpanStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.palette.background.buttonPlusCard};
  color: ${props => props.theme.palette.background.cardItem};
  width: 28px;
  height: 28px;
  align-items: center;
  border-radius: 8px;
`;
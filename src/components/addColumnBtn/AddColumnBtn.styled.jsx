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
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
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
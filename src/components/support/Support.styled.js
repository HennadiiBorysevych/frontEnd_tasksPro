import styled from '@emotion/styled';

export const SupportBox = styled.button`
  margin-bottom: 24px;
  padding: 14px;
  display: block;
  background-color: ${props => props.theme.palette.background.support};
  border-radius: 8px;
  text-align: left;
`;

export const SupportPlate = styled.img`
  display: block;
  margin-bottom: 14px;
`;

export const SupportOffer = styled.p`
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
`;

export const AppName = styled.span`
  color: ${props => props.theme.palette.hover.inputAndIcon};
`;

export const SupportQuestion = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TextHelp = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.24px;
`;

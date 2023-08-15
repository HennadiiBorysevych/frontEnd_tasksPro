import Typography from 'components/typography/Typography';

import styled from '@emotion/styled';

export const SupportBox = styled.button`
  padding: 14px;
  display: block;
  background-color: ${props => props.theme.palette.background.support};
  border-radius: 8px;
  text-align: left;
  margin: 40px 14px 24px;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    margin: 40px 24px 24px;
  }
`;

export const SupportPlate = styled.img`
  display: block;
  margin-bottom: 14px;
`;

export const SupportOffer = styled(Typography)`
  margin-bottom: 18px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    line-height: 1.43;
    font-size: 14px;
  }
`;

export const AppName = styled.span`
  color: ${props => props.theme.palette.hover.inputAndIcon};
`;

export const SupportQuestion = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;


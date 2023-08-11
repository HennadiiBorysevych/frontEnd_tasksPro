import styled from '@emotion/styled';

// ERROR PAGE
export const ErrorPageHeader = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  margin-bottom: 48px;
`;

export const ErrorPageCode = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 50px;
  line-height: 40px;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ErrorPageNum = styled.p`
  display: block;

  font-size: 100px;
  line-height: 100px;
`;

export const ErrorPageDescription = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;

  text-align: center;
`;

export const ErrorPageText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  margin-bottom: 14px;
`;

export const ErrorPageInviteText = styled.span`
  display: inline-block;
  margin-top: 14px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

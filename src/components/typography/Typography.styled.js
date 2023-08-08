import styled from '@emotion/styled';
import { TypographyVariants } from './TypographyVariants';

const sharedStyles = {
  color: '#fff',
};

export const typographyVariants = {
  [TypographyVariants.projectTitle]: styled.h2`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.36px;
    ${sharedStyles};
  `,

  [TypographyVariants.columnTitle]: styled.h3`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
    ${sharedStyles};
  `,

  [TypographyVariants.tastTitle]: styled.h4`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.28px;
    ${sharedStyles};
  `,

  [TypographyVariants.taskDescription]: styled.p`
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.24px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(255, 255, 255, 0.5);
  `,

  [TypographyVariants.subTitle]: styled.p`
    font-size: 8px;
    letter-spacing: -0.16px;
    color: rgba(255, 255, 255, 0.5);
  `,

  [TypographyVariants.subText]: styled.p`
    font-size: 10px;
    letter-spacing: -0.2px;
    ${sharedStyles};
  `,

  [TypographyVariants.supportText]: styled.p`
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: -0.28px;
    ${sharedStyles};
  `,

  [TypographyVariants.helpText]: styled.p`
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.24px;
    ${sharedStyles};
  `,

  [TypographyVariants.welcomeText]: styled.p`
    color: #161616;
    text-align: center;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.28px;
  `,
};

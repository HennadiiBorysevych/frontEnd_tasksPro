import { TypographyVariants } from './TypographyVariants';

import styled from '@emotion/styled';

export const sharedStyles = props => ({
  color: props.theme.palette.text.primary,
});

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
    line-height: 1.5;
    ${sharedStyles};
  `,

  [TypographyVariants.tastTitle]: styled.h4`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.28px;
    line-height: 1.5;
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
    color: ${props => props.theme.palette.text.primary}80;
  `,

  [TypographyVariants.subTitle]: styled.p`
    font-size: 8px;
    line-height: 1.5;
    letter-spacing: -0.16px;
    color: ${props => props.theme.palette.text.primary}80;
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
    line-height: 1.3;
    ${sharedStyles};
  `,

  [TypographyVariants.welcomeText]: styled.p`
    text-align: center;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.28px;
    ${sharedStyles};
  `,
};

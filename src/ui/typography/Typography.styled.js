import { BASE_COLORS } from 'constants';

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

  [TypographyVariants.taskDescription]: styled.p(props => ({
    fontSize: '12px',
    lineHeight: '1.33',
    letterSpacing: '-0.24px',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: props.theme.palette.text.secondary,
  })),

  [TypographyVariants.subTitle]: styled.p(props => ({
    fontSize: '8px',
    lineHeight: 1.5,
    letterSpacing: '-0.16px',
    color: props.theme.palette.text.primaryMedium,
  })),

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
    text-align: center;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.28px;
    ${sharedStyles};
  `,

  [TypographyVariants.welcomePageText]: styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
    color: ${BASE_COLORS.authColors.textPrimary};
  `,
};

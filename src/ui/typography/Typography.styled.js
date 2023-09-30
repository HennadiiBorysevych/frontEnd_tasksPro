import { BASE_COLORS } from 'constants';
import { typographyVariants } from 'constants';

import styled from '@emotion/styled';

const { authColors } = BASE_COLORS;

const sharedStyles = props => ({
  color: props.theme.palette.text.primary,
});

const typographyStyles = {
  subTitle: {
    fontSize: 8,
    lineHeight: 1.5,
    letterSpacing: -0.16,
  },
  normalText: {
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: -0.24,
  },
  buttonsAndPopUp: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: -0.28,
  },
  smallText: {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: -0.24,
  },
};

export const textVariants = {
  //typographic styles for titles
  //publicPages titles
  [typographyVariants.welcomeProjectTitle]: styled.h1(
    {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: -1.12,
      color: authColors.textPrimary,
    },
    props => ({
      [props.theme.breakpoints.up('medium')]: {
        fontSize: 40,
        letterSpacing: -1.6,
      },
    })
  ),

  //privatePages titles
  [typographyVariants.projectTitle]: styled.h1(props => ({
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: -0.64,
    color: props.theme.palette.text.sidebarPrimary,
  })),

  [typographyVariants.modalTitle]: styled.h2`
    //uses into public page PasswordPage
    ${sharedStyles}
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.36px;
  `,

  [typographyVariants.columnTitle]: styled.h2`
    ${sharedStyles};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
  `,

  [typographyVariants.cardTitle]: styled.h3`
    ${sharedStyles};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.28px;
  `,

  [typographyVariants.subTitle]: styled.h4(props => ({
    ...typographyStyles.subTitle,
    color: props.theme.palette.text.primaryMedium,
  })),

  //typographic styles for text
  //publicPages texts
  [typographyVariants.welcomePageText]: styled.p`
    ${typographyStyles.normalText}
    line-height: 1.28;
    letter-spacing: -0.28px;
    color: ${authColors.textPrimary};
  `,

  [typographyVariants.passwordForgot]: styled.span(
    {
      fontSize: 12,
      color: authColors.textSecondary,
    },
    props => ({
      [props.theme.breakpoints.up('medium')]: {
        fontSize: 14,
      },
    })
  ),

  //privatePages texts
  [typographyVariants.signOut]: styled.span(props => ({
    ...typographyStyles.buttonsAndPopUp,
    letterSpacing: 0,
    color: props.theme.palette.text.sidebarPrimary,

    [props.theme.breakpoints.up('large')]: {
      fontSize: 16,
    },
  })),

  [typographyVariants.buttonPopUpAndDropdownText]: styled.span`
    ${typographyStyles.buttonsAndPopUp};
    ${sharedStyles};
  `,

  [typographyVariants.buttonText]: styled.span`
    ${typographyStyles.buttonsAndPopUp};
    ${sharedStyles};
    text-align: center;
  `,

  [typographyVariants.themeMenuText]: styled.li(
    {
      ...typographyStyles.normalText,
      letterSpacing: -0.28,
    },
    ({ theme }) => ({
      color: theme.palette.text.themeMenuItems,
    })
  ),

  [typographyVariants.inputText]: styled.input`
    font-family: inherit;
    ${typographyStyles.normalText};
    ${sharedStyles};
  `,

  [typographyVariants.textAreaText]: styled.textarea`
    font-family: inherit;
    ${typographyStyles.normalText};
    ${sharedStyles};
  `,

  [typographyVariants.welcomeText]: styled.p(
    {
      ...typographyStyles.smallText,
      lineHeight: 1.33,
      textAlign: 'center',
    },
    ({ theme }) => ({
      color: theme.palette.text.secondary,
      [theme.breakpoints.up('medium')]: {
        fontSize: 14,
        lineHeight: 1.29,
        letterSpacing: -0.28,
      },
    })
  ),

  [typographyVariants.supportText]: styled.span(
    {
      ...typographyStyles.smallText,
      lineHeight: 1.33,
    },
    ({ theme }) => ({
      color: theme.palette.text.sidebarPrimary,
      [theme.breakpoints.up('medium')]: {
        fontSize: 14,
        lineHeight: 1.43,
        letterSpacing: -0.28,
      },
    })
  ),

  [typographyVariants.helpText]: styled.span(
    {
      ...typographyStyles.smallText,
      fontWeight: 500,
    },
    ({ theme }) => ({
      color: theme.palette.text.sidebarPrimary,
    })
  ),

  [typographyVariants.taskDescription]: styled.p(
    {
      ...typographyStyles.smallText,
      lineHeight: 1.33,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    ({ theme }) => ({
      color: theme.palette.text.secondary,
    })
  ),

  [typographyVariants.supplementaryPopUpText]: styled.p`
    ${typographyStyles.smallText};
    ${sharedStyles};
  `,

  [typographyVariants.subText]: styled.p`
    font-size: 10px;
    letter-spacing: -0.2px;
    ${sharedStyles};
  `,
};

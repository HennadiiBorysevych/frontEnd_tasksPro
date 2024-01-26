import React from 'react';

import ButtonPlus from '../buttonPlus/ButtonPlus';

import PrimaryButtonPropTypes from './propTypes';

import * as styles from './PrimaryButton.styled';

const PrimaryButton = ({
  children,
  onClick,
  width,
  hasIcon,
  svgName,
  variantIcon,
  variantMarginTop,
  ...rest
}) => {
  return (
    <styles.ButtonStyled
      variantMarginTop={variantMarginTop}
      onClick={onClick}
      width={width}
      svgName={svgName}
      {...rest}
    >
      {hasIcon && <ButtonPlus svgName={svgName} variantIcon="primary" />}
      <styles.ButtonText variant="buttonText">{children}</styles.ButtonText>
    </styles.ButtonStyled>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = PrimaryButtonPropTypes;

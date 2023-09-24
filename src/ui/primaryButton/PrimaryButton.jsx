import React from 'react';
import PropTypes from 'prop-types';

import ButtonPlus from '../buttonPlus/ButtonPlus';

import { ButtonStyled } from './PrimaryButton.styled';

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
    <ButtonStyled
      variantMarginTop={variantMarginTop}
      onClick={onClick}
      width={width}
      svgName={svgName}
      {...rest}
    >
      {hasIcon && <ButtonPlus svgName={svgName} variantIcon="primary" />}
      {children}
    </ButtonStyled>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hasIcon: PropTypes.bool,
  svgName: PropTypes.string,
  variantIcon: PropTypes.string,
  variantMarginTop: PropTypes.string,
};

export default PrimaryButton;

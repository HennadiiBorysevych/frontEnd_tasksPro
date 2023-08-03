import React from 'react';
import { ButtonStyled } from './PrimaryButton.styled';
import PropTypes from 'prop-types';
import { ButtonPlus } from 'components';

const PrimaryButton = ({
  children,
  onClick,
  width,
  height,
  hasIcon,
  svgName,
  ...rest
}) => {
  
  return (
    <ButtonStyled
      onClick={onClick}
      style={{ width, height }}
      svgName={svgName}
      {...rest}
    >
      {hasIcon && <ButtonPlus svgName={svgName} />}
      {children}
    </ButtonStyled>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hasIcon: PropTypes.bool.isRequired,
  svgName: PropTypes.string,
};

export default PrimaryButton;

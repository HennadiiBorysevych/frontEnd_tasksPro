import React from 'react';
import { ButtonStyled } from './PrimaryButton.styled';
import PropTypes from 'prop-types';
import { ButtonPlus } from 'components';

const PrimaryButton = ({
  children,
  onClick,
  onSubmit,
  type = 'button',
  width,
  height,
  hasIcon,
  svgName,
  ...rest
}) => {
  const eventHandler = type === 'submit' ? onSubmit : onClick;
  return (
    <ButtonStyled
      onClick={eventHandler}
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
  onSubmit: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hasIcon: PropTypes.bool.isRequired,
  svgName: PropTypes.string,
};

export default PrimaryButton;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  InputStyled,
  InputUnit,
  PasswordEyeIcon,
  PasswordWrapperIcon,
  TextareaStyled,
} from './Input.styled';

const Input = ({
  multiline,
  height,
  type,
  name,
  placeholder,
  onChange,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <>
      {multiline ? (
        <TextareaStyled
          height={height}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          variant="textAreaText"
          {...rest}
        />
      ) : (
        <InputUnit>
          <InputStyled
            type={showPassword ? 'text' : type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            variant="inputText"
            {...rest}
          />
          {type === 'password' && (
            <PasswordWrapperIcon onClick={handleTogglePassword}>
              <PasswordEyeIcon
                svgName={showPassword ? 'icon-eye' : 'icon-eye-close'}
                size="18"
                variantIcon="popUp"
                isActive={true}
              />
            </PasswordWrapperIcon>
          )}
        </InputUnit>
      )}
    </>
  );
};

export default Input;

Input.propTypes = {
  multiline: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  height: PropTypes.string,
};

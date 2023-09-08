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
  background,
  ...rest
}) => {
  // console.log(typeof height); // дописати prop-types
  // console.log(typeof type); // дописати prop-types

  // console.log(typeof background); // дописати prop-types

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
          background={background}
          {...rest}
        />
      ) : (
        <InputUnit>
          <InputStyled
            type={showPassword ? 'text' : type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            background={background}
            {...rest}
          />
          {type === 'password' && (
            <PasswordWrapperIcon onClick={handleTogglePassword}>
              <PasswordEyeIcon
                svgName={showPassword ? 'icon-eye' : 'icon-eye-close'}
                size="18"
                variant="popUp"
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
};

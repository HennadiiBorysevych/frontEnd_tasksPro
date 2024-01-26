import React, { useState } from 'react';

import InputPropTypes from './propTypes';

import * as styles from './Input.styled';

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
        <styles.TextareaStyled
          height={height}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          variant="textAreaText"
          {...rest}
        />
      ) : (
        <styles.InputUnit>
          <styles.InputStyled
            type={showPassword ? 'text' : type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            variant="inputText"
            {...rest}
          />
          {type === 'password' && (
            <styles.PasswordWrapperIcon onClick={handleTogglePassword}>
              <styles.PasswordEyeIcon
                svgName={showPassword ? 'icon-eye' : 'icon-eye-close'}
                size="18"
                variantIcon="popUp"
                isActive={true}
              />
            </styles.PasswordWrapperIcon>
          )}
        </styles.InputUnit>
      )}
    </>
  );
};

export default Input;

Input.propTypes = InputPropTypes;

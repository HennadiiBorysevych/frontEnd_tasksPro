import React, { useState } from 'react';
import { SvgIcon } from 'components';
import {
  InputStyled,
  TextareaStyled,
  PasswordWrapperIcon,
  PasswordInputWrapper,
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
        <>
          {type === 'password' ? (
            <PasswordInputWrapper onClick={handleTogglePassword}>
              <InputStyled
                type={showPassword ? 'text' : type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                background={background}
                {...rest}
              />
              <PasswordWrapperIcon>
                <SvgIcon
                  svgName={showPassword ? 'icon-eye' : 'icon-eye-close'}
                  width="18"
                  height="18"
                  fill="#ffffff"
                />
              </PasswordWrapperIcon>
            </PasswordInputWrapper>
          ) : (
            <InputStyled
              type={showPassword ? 'text' : type}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              background={background}
              {...rest}
            />
          )}
        </>
      )}
    </>
  );
};

export default Input;

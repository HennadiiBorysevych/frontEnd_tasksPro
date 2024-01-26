import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import { Input, PrimaryButton } from 'ui';

import GoogleAuth from '../googleAuth/GoogleAuth';

import CommonFormPropTypes from './propTypes';

import * as styles from './commonForm.styled';

const CommonForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  avatar,
  children,
  inputs,
  onChange,
  customInputProps,
  variantMessage,
  settings,
  id,
  variantIcon,
  hasIcon,
  variantMarginTop,
  buttonText,
  google,
  authInputsTabsReset,
}) => {
  const {
    setValues,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues,
    onSubmit: values => {
      onSubmit(values);
      resetForm();
    },
    validationSchema,
  });

  useEffect(() => {
    async function breakFormikInputs() {
      await setValues({
        name: initialValues.name,
        email: initialValues.email,
        password: initialValues.password,
      });
    }
    if (id === 'register-or-login-button') {
      breakFormikInputs();
    }
  }, [
    authInputsTabsReset,
    id,
    initialValues.email,
    initialValues.name,
    initialValues.password,
    setValues,
  ]);

  return (
    <styles.Form onSubmit={handleSubmit}>
      {avatar && children}
      <styles.InputList>
        {inputs.map(inputProps => (
          <styles.InputItem key={inputProps?.name}>
            <Input
              name={inputProps?.name}
              type={inputProps?.type}
              multiline={inputProps?.multiline}
              placeholder={inputProps?.placeholder}
              onChange={e => {
                handleChange(e);
                onChange(e);
                if (customInputProps && customInputProps[inputProps?.name]) {
                  customInputProps[inputProps?.name](e);
                }
              }}
              value={values[inputProps?.name]}
            />

            {errors[inputProps?.name] && touched[inputProps?.name] ? (
              <styles.ErrorMessage
                variantMessage={variantMessage}
                variant="supplementaryPopUpText"
              >
                {errors[inputProps?.name]}
              </styles.ErrorMessage>
            ) : null}
          </styles.InputItem>
        ))}
      </styles.InputList>
      {settings && children}
      <PrimaryButton
        id={id}
        variantIcon={variantIcon}
        hasIcon={hasIcon}
        variantMarginTop={variantMarginTop}
        type="submit"
      >
        {buttonText}
      </PrimaryButton>
      {google && <GoogleAuth />}
    </styles.Form>
  );
};

export default CommonForm;

CommonForm.propTypes = CommonFormPropTypes;

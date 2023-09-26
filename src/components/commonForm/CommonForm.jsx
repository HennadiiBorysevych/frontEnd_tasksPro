import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { Input, PrimaryButton } from 'ui';

import GoogleAuth from '../googleAuth/GoogleAuth';

import { ErrorMessage, Form, InputItem, InputList } from './commonForm.styled';
import { useAuth } from 'hooks';

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
  // const { resetInputs } = useAuth();

  useEffect(() => {
    breakFormikInputs();
  }, [authInputsTabsReset]);

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

  async function breakFormikInputs() {
    await setValues({
      name: initialValues.name,
      email: initialValues.email,
      password: initialValues.password,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      {avatar && children}
      <InputList>
        {inputs.map(inputProps => (
          <InputItem key={inputProps?.name}>
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
              <ErrorMessage variantMessage={variantMessage}>
                {errors[inputProps?.name]}
              </ErrorMessage>
            ) : null}
          </InputItem>
        ))}
      </InputList>
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
    </Form>
  );
};

export default CommonForm;

CommonForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.object,
  avatar: PropTypes.bool,
  children: PropTypes.node,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      multiline: PropTypes.bool,
    })
  ).isRequired,
  onChange: PropTypes.func,
  variantMessage: PropTypes.string,
  settings: PropTypes.bool,
  id: PropTypes.string,
  variantIcon: PropTypes.string,
  hasIcon: PropTypes.bool,
  variantMarginTop: PropTypes.string,
  buttonText: PropTypes.string,
  google: PropTypes.bool,
};

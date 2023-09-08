import React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { Input, PopUpLayout, PrimaryButton } from 'ui';

import {
  ErrorMessage,
  Form,
} from '../../assets/styles/commonFormStyles.styled';

const CommonPopUp = ({
  title,
  onClose,
  onSubmit,
  inputs,
  initialValues,
  validationSchema,
  buttonText,
}) => {
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <PopUpLayout title={title} handleClose={onClose}>
      <Form onSubmit={handleSubmit}>
        {inputs.map((inputProps, index) => (
          <div key={index}>
            <Input
              key={index}
              name={inputProps?.name}
              type={inputProps?.type}
              placeholder={inputProps?.placeholder}
              onChange={handleChange}
              value={values[inputProps?.name]}
            />

            {errors[inputProps?.name] && touched[inputProps?.name] ? (
              <ErrorMessage>{errors[inputProps?.name]}</ErrorMessage>
            ) : null}
          </div>
        ))}
        <PrimaryButton type="submit">{buttonText}</PrimaryButton>
      </Form>
    </PopUpLayout>
  );
};

CommonPopUp.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    })
  ).isRequired,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default CommonPopUp;

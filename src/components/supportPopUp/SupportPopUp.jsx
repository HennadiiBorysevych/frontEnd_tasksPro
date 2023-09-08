import React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { popUpInitialValues } from 'constants';

import { supportSchema } from 'helpers/validationSchemas';
import { useSupport } from 'hooks';

import { Input, PopUpLayout, PrimaryButton } from 'ui';

import {
  ErrorMessage,
  Form,
} from '../../assets/styles/commonFormStyles.styled';

const { supportValues } = popUpInitialValues;

const SupportPopUp = ({ onClose }) => {
  // const { user } = useAuth();
  const { handleSupportSubmit } = useSupport(onClose);
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      // initialValues: { email: user?.email ?? '', comment: '' },
      initialValues: supportValues,
      onSubmit: handleSupportSubmit,
      validationSchema: supportSchema,
    });

  return (
    <PopUpLayout title="Need help" handleClose={onClose}>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email ? (
          <ErrorMessage>{errors.email}</ErrorMessage>
        ) : null}
        <Input
          name="comment"
          type="comment"
          placeholder={'Comment'}
          multiline={true}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.comment}
        />
        {errors.comment && touched.comment ? (
          <ErrorMessage>{errors.comment}</ErrorMessage>
        ) : null}
        <PrimaryButton
          id="send-email-to-support"
          type="submit"
          style={{ marginTop: '10px' }} //---?-----------
        >
          Send
        </PrimaryButton>
      </Form>
    </PopUpLayout>
  );
};

export default SupportPopUp;

SupportPopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

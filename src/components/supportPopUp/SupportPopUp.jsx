import React from 'react';
import { useFormik } from 'formik';
import { useAuth, useSupport } from 'hooks';
import { supportSchema } from 'validationSchemas';

import { Input, PopUpLayout, PrimaryButton } from 'components';

import { Container } from './SupportPopUp.styled';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
};

const SupportPopUp = ({ onClose }) => {
  const { user } = useAuth();
  const { handleSupportSubmit } = useSupport();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { email: user?.email ?? '', comment: '' },
      onSubmit: handleSupportSubmit,
      validationSchema: supportSchema,
    });

  return (
    <Container>
      <PopUpLayout title="Need help" handleClose={onClose}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <span style={{ color: 'white' }}>{errors.email}</span>
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
            <span style={{ color: 'white' }}>{errors.comment}</span>
          ) : null}
          <PrimaryButton
            type="submit"
            hasIcon={false}
            style={{ marginTop: '10px' }}
          >
            Send
          </PrimaryButton>
        </form>
      </PopUpLayout>
    </Container>
  );
};

export default SupportPopUp;

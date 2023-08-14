import React from 'react';
import { useFormik } from 'formik';
import { popUpSchema } from 'validationSchemas';

import { Input, PopUpLayout, PrimaryButton } from 'components';

import useColumn from '../../hooks/useColumn';

import { Container, Wrapper } from './ColumnPopUp.styled';

const ColumnPopUp = ({ boardId, columnIndex, column, handleModalClose }) => {
  const { handleColumnSubmit } = useColumn(
    column,
    columnIndex,
    boardId,
    handleModalClose
  );
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { title: '' },
      onSubmit: handleColumnSubmit,
      validationSchema: popUpSchema,
    });

  return (
    <Container>
      <PopUpLayout
        title={column ? 'Edit column' : 'Add column'}
        handleClose={handleModalClose}
      >
        <form onSubmit={handleSubmit}>
          <Input
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={column ? column?.title : 'Title'}
            value={values.title}
            style={{
              marginBottom: '10px',
            }}
          />
          {errors.title && touched.title ? (
            <Wrapper>{errors.title}</Wrapper>
          ) : null}
          <PrimaryButton
            hasIcon={true}
            type="submit"
            variant='primary'
            style={{
              marginTop: '14px',
            }}
          >          
            {column ? 'Edit' : 'Add'}
          </PrimaryButton>
        </form>
      </PopUpLayout>
    </Container>
  );
};

export default ColumnPopUp;

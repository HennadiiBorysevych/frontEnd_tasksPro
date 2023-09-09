import React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { popUpInitialValues } from 'constants';

import { popUpSchema } from 'helpers/validationSchemas';
import { useColumn } from 'hooks';

import { Input, PopUpLayout, PrimaryButton } from 'ui';

import { ErrorMessage, Form } from 'assets/styles/commonFormStyles.styled';

const { columnValues } = popUpInitialValues;

const ColumnPopUp = ({ boardId, columnIndex, column, handleModalClose }) => {
  const { handleColumnSubmit } = useColumn(
    column,
    columnIndex,
    boardId,
    handleModalClose
  );
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: columnValues,
      onSubmit: handleColumnSubmit,
      validationSchema: popUpSchema,
    });

  return (
    <PopUpLayout
      title={column ? 'Edit column' : 'Add column'}
      handleClose={handleModalClose}
    >
      <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={column ? column?.title : 'Title'}
          value={values.title}
          style={{
            marginBottom: '10px', //---?-----------
          }}
        />
        {errors.title && touched.title ? (
          <ErrorMessage>{errors.title}</ErrorMessage>
        ) : null}
        <PrimaryButton
          id="create-or-edit-column-button"
          hasIcon={true}
          type="submit"
          variant="primary"
          style={{
            marginTop: '14px', //---?-----------
          }}
        >
          {column ? 'Edit' : 'Add'}
        </PrimaryButton>
      </Form>
    </PopUpLayout>
  );
};

export default ColumnPopUp;

ColumnPopUp.propTypes = {
  boardId: PropTypes.string,
  columnIndex: PropTypes.number,
  column: PropTypes.shape({
    id: PropTypes.string,
    columnOwner: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        cardOwner: PropTypes.string,
        order: PropTypes.number,
        deadline: PropTypes.string,
        id: PropTypes.string,
        priority: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }),
  handleModalClose: PropTypes.func.isRequired,
};

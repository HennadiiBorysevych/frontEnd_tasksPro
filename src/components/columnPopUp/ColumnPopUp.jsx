import React from 'react';
import PropTypes from 'prop-types';

import { popUpInitialValues } from 'constants';

import { popUpSchema } from 'helpers/validationSchemas';
import { useColumn } from 'hooks';

import { CommonPopUp } from 'ui';

const ColumnPopUp = ({ boardId, columnIndex, column, handleModalClose }) => {
  const { handleColumnSubmit, handleTitle } = useColumn(
    column,
    columnIndex,
    boardId,
    handleModalClose
  );

  const { columnValues } = popUpInitialValues;

  const inputs = [
    {
      name: 'title',
      type: 'text',
      placeholder: column ? column?.title : 'Title',
    },
  ];
  // const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
  //   useFormik({
  //     initialValues: columnValues,
  //     onSubmit: handleColumnSubmit,
  //     validationSchema: popUpSchema,
  //   });

  return (
    <CommonPopUp
      title={column ? 'Edit column' : 'Add column'}
      onClose={handleModalClose}
      onSubmit={handleColumnSubmit}
      onChange={handleTitle}
      inputs={inputs}
      initialValues={columnValues}
      validationSchema={column ? null : popUpSchema}
      buttonText={column ? 'Edit' : 'Create'}
      version="formPopUp"
      hasIcon={true}
      variant="primary"
      id="create-or-edit-column-button"
    ></CommonPopUp>
    // <PopUpLayout
    //   title={column ? 'Edit column' : 'Add column'}
    //   handleClose={handleModalClose}
    // >
    //   <Form onSubmit={handleSubmit}>
    //     <Input
    //       name="title"
    //       onChange={handleChange}
    //       onBlur={handleBlur}
    //       placeholder={column ? column?.title : 'Title'}
    //       value={values.title}
    //     />
    //     {errors.title && touched.title ? (
    //       <ErrorMessage>{errors.title}</ErrorMessage>
    //     ) : null}
    //     <PrimaryButton
    //       version="formPopUp"
    //       id="create-or-edit-column-button"
    //       hasIcon={true}
    //       type="submit"
    //       variant="primary"
    //     >
    //       {column ? 'Edit' : 'Add'}
    //     </PrimaryButton>
    //   </Form>
    // </PopUpLayout>
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

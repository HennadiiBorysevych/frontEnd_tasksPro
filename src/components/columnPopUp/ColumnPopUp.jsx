import React from 'react';
import PropTypes from 'prop-types';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { popUpSchema } from 'helpers';
import { useColumn } from 'hooks';

import { CommonPopUp } from 'ui';

const ColumnPopUp = ({ boardId, columnIndex, column, handleModalClose }) => {
  const { handleColumnSubmit, handleTitle } = useColumn(
    column,
    columnIndex,
    boardId,
    handleModalClose
  );

  const { columnValues } = POP_UP_INITIAL_VALUES;

  const inputs = [
    {
      name: 'title',
      type: 'text',
      placeholder: column ? column?.title : 'Title',
    },
  ];

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
      variantMarginTop="formPopUp"
      hasIcon={true}
      variantIcon="primary"
      id="create-or-edit-column-button"
    />
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

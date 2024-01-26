import React from 'react';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { popUpSchema } from 'helpers';
import { useColumn } from 'hooks';

import { CommonPopUp } from 'ui';

import ColumnPopUpPropTypes from './propTypes';

const ColumnPopUp = ({ boardId, columnIndex, column, handleModalClose }) => {
  const { inputs, handleColumnSubmit, handleTitle } = useColumn(
    column,
    columnIndex,
    boardId,
    handleModalClose
  );

  const { columnValues } = POP_UP_INITIAL_VALUES;

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

ColumnPopUp.propTypes = ColumnPopUpPropTypes;

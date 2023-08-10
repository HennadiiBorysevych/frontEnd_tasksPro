import React from 'react';
import { Container } from './ColumnPopUp.styled';
import { PopUpLayout, Input, PrimaryButton } from 'components';
import useColumn from '../../hooks/useColumn';

const ColumnPopUp = ({ boardId, columnIndex, column, handleModalClose }) => {
  const { titleChecker, handleTitle, handleColumnSubmit } = useColumn(
    column,
    columnIndex,
    boardId,
    handleModalClose
  );

  return (
    <Container>
      <PopUpLayout
        title={column ? 'Edit column' : 'Add column'}
        handleClose={handleModalClose}
      >
        <Input
          name="title"
          onChange={handleTitle}
          placeholder={column ? column?.title : 'Title'}
          style={{
            marginBottom: '24px',
            border: titleChecker && '1px solid red',
          }}
        />
        <PrimaryButton hasIcon={false} onClick={handleColumnSubmit}>
          {column ? 'Edit' : 'Add'}
        </PrimaryButton>
      </PopUpLayout>
    </Container>
  );
};

export default ColumnPopUp;

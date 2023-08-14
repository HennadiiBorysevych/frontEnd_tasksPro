import React from 'react';
import { useModal } from 'hooks';

import { ColumnPopUp, Modal, SvgIcon } from 'components';

import { ButtonAddColumn, SpanStyled } from './AddColumnBtn.styled';

const AddColumnBtn = ({ boardId, columnIndex }) => {
  const { isModal, onBackdropClick, toggleModal } = useModal();
  return (
    <div>
      <ButtonAddColumn type="button" onClick={toggleModal}>
        <SpanStyled>
          <SvgIcon svgName="icon-plus" variant='buttonCard' size={14} />
        </SpanStyled>
        Add another column
      </ButtonAddColumn>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <ColumnPopUp
            boardId={boardId}
            columnIndex={columnIndex}
            handleModalClose={toggleModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default AddColumnBtn;

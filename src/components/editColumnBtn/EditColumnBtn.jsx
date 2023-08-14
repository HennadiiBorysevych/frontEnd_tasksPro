import React from 'react';
import { useModal } from 'hooks';

import { ColumnPopUp, IconButton, Modal } from 'components';

const EditColumnBtn = ({ column }) => {
  const { isModal, onBackdropClick, toggleModal } = useModal();
  return (
    <>
      <IconButton onClick={toggleModal} svgName="icon-pencil" />
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <ColumnPopUp column={column} handleModalClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default EditColumnBtn;

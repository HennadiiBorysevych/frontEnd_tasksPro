import React from 'react';
import { useModal } from 'hooks';

import { ColumnPopUp, Modal, SvgIcon } from 'components';

const EditColumnBtn = ({ column }) => {
  const { isModal, onBackdropClick, toggleModal } = useModal();
  return (
    <>
      <div onClick={toggleModal}>
        <SvgIcon
          svgName="icon-pencil"
          size={16}
          stroke="rgba(255, 255, 255, 0.5)"
        />
      </div>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <ColumnPopUp column={column} handleModalClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default EditColumnBtn;

import React from 'react';
import { useModal } from 'hooks';

import { CardPopUp, Modal, PrimaryButton } from 'components';

const AddCardBtn = ({ columnId, cardIndex }) => {
  const { isModal, onBackdropClick, toggleModal } = useModal();
  return (
    <>
      <PrimaryButton
        hasIcon={true}
        type="button"
        svgName={'icon-plus'}
        variant="primary"
        onClick={toggleModal}
      >
        Add another card
      </PrimaryButton>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <CardPopUp
            columnId={columnId}
            cardIndex={cardIndex}
            handleModalClose={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

export default AddCardBtn;

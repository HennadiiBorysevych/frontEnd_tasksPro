import React from 'react';
import PropTypes from 'prop-types';

import { useModal } from 'hooks';

import { Modal, PrimaryButton } from 'ui';

import CardPopUp from '../cardPopUp/CardPopUp';

const AddCardBtn = ({ columnId, cardIndex }) => {
  const { isModal, onBackdropClick, toggleModal } = useModal();

  return (
    <>
      <PrimaryButton
        aria-label="Add card button"
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

AddCardBtn.propTypes = {
  columnId: PropTypes.string.isRequired,
  cardIndex: PropTypes.number.isRequired,
};

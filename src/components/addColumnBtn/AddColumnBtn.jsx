import React from 'react';
import { useModal } from 'hooks';

import { ButtonPlus, ColumnPopUp, Modal } from 'components';

const AddColumnBtn = ({ boardId, columnIndex }) => {
  const { isModal, onBackdropClick, toggleModal } = useModal();
  return (
    <div>
      <button
        type="button"
        onClick={toggleModal}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          width: '334px',
          justifyContent: 'center',
          padding: '14px 0',
          borderRadius: '8px',
        }}
      >
        <ButtonPlus
          stroke="#121212"
          width={28}
          height={28}
          backgroundColor="#ffffff"
        />
        Add another column
      </button>
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

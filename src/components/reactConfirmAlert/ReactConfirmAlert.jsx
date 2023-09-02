import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import { useCards } from 'hooks';

import { SvgIcon } from 'components';

import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  AlertContainer,
  CancelButton,
  ConfirmDeleteButton,
  ConfirmDialog,
  Overlay,
} from './ReactConfirmAlert.styled';

const ReactConfirmAlert = ({
  selectedTheme,
  onDeleteAction,
  item,
  owner,
  onToggle,
  ownerId,
}) => {
  const { allCards } = useCards();

  const handleDeleteConfirm = () => {
    onDeleteAction();
  };

  const existingCard = allCards.some(obj => obj.cardOwner === ownerId);

  const helpToggle = () => {
    if (owner === 'sidebar' && allCards.length > 0) {
      toast.error('Board can not deleted with existed tasks');
      return;
    }
    if (owner === 'columns' && existingCard) {
      toast.error('Column can not deleted with existed tasks');
      return;
    }
    if (owner === 'sidebar') {
      onToggle();
    }
    confirmAlert({
      customUI: ({ onClose }) => (
        <Overlay>
          <AlertContainer theme={selectedTheme}>
            <h2>Confirm the deletion</h2>
            <p>Are you sure you want to delete this {item}?</p>
            <ConfirmDialog>
              <CancelButton onClick={onClose}>Cancel</CancelButton>
              <ConfirmDeleteButton
                onClick={() => {
                  handleDeleteConfirm();
                  onClose();
                }}
              >
                Delete
              </ConfirmDeleteButton>
            </ConfirmDialog>
          </AlertContainer>
        </Overlay>
      ),
    });
  };

  return (
    <button aria-label="Delete" onClick={helpToggle}>
      <SvgIcon
        svgName="icon-trash"
        size={16}
        variant={owner === 'sidebar' ? 'support' : 'popUp'}
        isActive={false}
      />
    </button>
  );
};

export default ReactConfirmAlert;

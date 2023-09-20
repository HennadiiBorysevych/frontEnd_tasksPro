import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { useCardsCollector } from 'hooks';

import SvgIcon from '../svgIcon/SvgIcon';

import './reactConfirmAlert.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  AlertContainer,
  AlertQuestion,
  AlertTitle,
  CancelButton,
  ConfirmDeleteButton,
  ConfirmDialog,
  DeleteButton,
} from './ReactConfirmAlert.styled';

const ReactConfirmAlert = ({
  selectedTheme,
  onDeleteAction,
  item,
  owner,
  onToggle,
  ownerId,
}) => {
  const { allCards } = useCardsCollector();
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
      customUI: ({ onClose }) => {
        return (
          <AlertContainer theme={selectedTheme}>
            <AlertTitle theme={selectedTheme}>Confirm the deletion</AlertTitle>
            <AlertQuestion theme={selectedTheme}>
              Are you sure you want to delete this {item}?
            </AlertQuestion>
            <ConfirmDialog theme={selectedTheme}>
              <CancelButton
                onClick={onClose}
                theme={selectedTheme}
                id="cancel-deletion-item-button"
              >
                Cancel
              </CancelButton>
              <ConfirmDeleteButton
                id="confirm-deletion-item-button"
                theme={selectedTheme}
                onClick={() => {
                  handleDeleteConfirm();
                  onClose();
                }}
              >
                Delete
              </ConfirmDeleteButton>
            </ConfirmDialog>
          </AlertContainer>
        );
      },
    });
  };
  return (
    <DeleteButton aria-label="Delete item button" onClick={helpToggle}>
      <SvgIcon
        svgName="icon-trash"
        size={16}
        variant={owner === 'sidebar' ? 'support' : 'popUp'}
        isActive={false}
      />
    </DeleteButton>
  );
};

export default ReactConfirmAlert;

ReactConfirmAlert.propTypes = {
  selectedTheme: PropTypes.string.isRequired,
  onDeleteAction: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  ownerId: PropTypes.string,
  onToggle: PropTypes.func,
};

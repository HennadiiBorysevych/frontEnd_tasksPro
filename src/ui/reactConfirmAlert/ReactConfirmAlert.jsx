import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import { useCardsRedux } from 'redux/services';

import SvgIcon from '../svgIcon/SvgIcon';

import ReactConfirmAlertPropTypes from './propTypes';

import './reactConfirmAlert.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as styles from './ReactConfirmAlert.styled';

const ReactConfirmAlert = ({
  selectedTheme,
  onDeleteAction,
  item,
  owner,
  onToggle,
  ownerId,
}) => {
  const { allCards } = useCardsRedux();
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
          <styles.AlertContainer theme={selectedTheme}>
            <styles.AlertTitle theme={selectedTheme}>
              Confirm the deletion
            </styles.AlertTitle>
            <styles.AlertQuestion theme={selectedTheme}>
              Are you sure you want to delete this {item}?
            </styles.AlertQuestion>
            <styles.ConfirmDialog theme={selectedTheme}>
              <styles.CancelButton
                onClick={onClose}
                theme={selectedTheme}
                id="cancel-deletion-item-button"
              >
                Cancel
              </styles.CancelButton>
              <styles.ConfirmDeleteButton
                id="confirm-deletion-item-button"
                theme={selectedTheme}
                onClick={() => {
                  handleDeleteConfirm();
                  onClose();
                }}
              >
                Delete
              </styles.ConfirmDeleteButton>
            </styles.ConfirmDialog>
          </styles.AlertContainer>
        );
      },
    });
  };
  return (
    <styles.DeleteButton aria-label="Delete item button" onClick={helpToggle}>
      <SvgIcon
        svgName="icon-trash"
        size={16}
        variantIcon={owner === 'sidebar' ? 'support' : 'popUp'}
        isActive={false}
      />
    </styles.DeleteButton>
  );
};

export default ReactConfirmAlert;

ReactConfirmAlert.propTypes = ReactConfirmAlertPropTypes;

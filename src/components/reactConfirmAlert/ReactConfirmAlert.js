import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectAllTasks } from 'redux/tasks/cardSelectors';

import { SvgIcon } from 'components';

import 'react-confirm-alert/src/react-confirm-alert.css';
import './ReactConfirmAlert.styled.css';

const ReactConfirmAlert = ({
  selectedTheme,
  onDeleteAction,
  item,
  owner,
  onToggle,
  ownerId,
}) => {
  const tasks = useSelector(selectAllTasks);
  const handleDeleteConfirm = () => {
    onDeleteAction();
  };

  const toastTheme = selectedTheme === 'Dark' ? 'dark' : 'light';
  const toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: toastTheme,
  };
  const existsTask = tasks.some(obj => obj.cardOwner === ownerId);

  const helpToggle = () => {
    if (owner === 'sidebar' && tasks.length > 0) {
      toast.error('Board can not deleted with existed tasks', toastConfig);
      return;
    } else if (owner === 'columns' && existsTask) {
      toast.error('Column can not deleted with existed tasks', toastConfig);
      return;
    } else {
      if (owner === 'sidebar') {
        onToggle();
      }
      confirmAlert({
        customUI: ({ onClose }) => (
          <div
            className={`react-confirm ${
              selectedTheme === 'Dark'
                ? 'react-confirm-alert-dark'
                : 'react-confirm-alert-light'
            }`}
          >
            <h1>Confirm Deletion</h1>
            <p>Are you sure you want to delete this {item}?</p>
            <div className="confirm-buttons">
              <button onClick={onClose} className="green">
                Cancel
              </button>
              <button
                className="red"
                onClick={() => {
                  handleDeleteConfirm();
                  onClose();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ),
      });
    }
  };
  return (
    <button
      aria-label="Delete"
      onClick={() => {
        helpToggle();
      }}
    >
      {owner === 'sidebar' ? (
        <SvgIcon svgName="icon-trash" size={16} variant="support" />
      ) : (
        <SvgIcon
          svgName="icon-trash"
          size={16}
          variant="popUp"
          isActive={false}
        />
      )}
    </button>
  );
};

export default ReactConfirmAlert;

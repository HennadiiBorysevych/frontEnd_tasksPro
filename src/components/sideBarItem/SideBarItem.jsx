import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useSelector } from 'react-redux';
import { useBoardContext, useModal } from 'hooks';
import PropTypes from 'prop-types';
import { selectTheme } from 'redux/auth/authSelectors';
import { selectAllBoards } from 'redux/boards/boardSelectors';
import { useToggleModalAndSideBar } from 'sharedLayout/SharedLayout';

import { BoardPopUp, Modal, SvgIcon } from 'components';

import 'react-confirm-alert/src/react-confirm-alert.css';
import '../reactConfirmAlert/ReactConfirmAlert.styled.css';
import {
  BoardIdentificationItem,
  BoardItemControl,
  BoardListItem,
  BoardName,
} from './SideBarItem.styled';

const SideBarItem = ({
  id,
  iconName,
  title,
  active,
  onHandleActiveBoard,
  onDeleteClick,
}) => {
  const onToggleModalAndSideBar = useToggleModalAndSideBar();
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { activeBoardId } = useBoardContext();
  const boards = useSelector(selectAllBoards);

  const editingBoard = boards.find(board => board.id === activeBoardId);
  const selectedTheme = useSelector(selectTheme);
  const toggleWindows = () => {
    toggleModal();
    onToggleModalAndSideBar();
  };

  return (
    <>
      <BoardListItem isActive={active}>
        <BoardIdentificationItem
          onClick={() => {
            onHandleActiveBoard(id);
          }}
        >
          <SvgIcon
            svgName={`${iconName}`}
            size={18}
            isActive={active}
            variant="popUp"
          />
          <BoardName isActive={active}>{title}</BoardName>
        </BoardIdentificationItem>
        {active && (
          <BoardItemControl>
            <button aria-label="Edit board" onClick={toggleWindows}>
              <SvgIcon svgName="icon-pencil" size={16} variant="support" />
            </button>
            <button
              aria-label="Delete board"
              onClick={() => {
                confirmAlert({
                  customUI: ({ onClose }) => {
                    const onDeleteClose = () => {
                      onDeleteClick();
                      onClose();
                    };
                    return (
                      <div
                        className={`react-confirm ${
                          selectedTheme === 'Dark'
                            ? 'react-confirm-alert-dark'
                            : 'react-confirm-alert-light'
                        }`}
                      >
                        <h1>Confirm Deletion</h1>
                        <p>Are you sure you want to delete this board?</p>
                        <div className="confirm-buttons">
                          <button onClick={onClose} className="green">
                            Cancel
                          </button>

                          <button className="red" onClick={onDeleteClose}>
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  },
                });
              }}
            >
              <SvgIcon svgName="icon-trash" size={16} variant="support" />
            </button>
          </BoardItemControl>
        )}
      </BoardListItem>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <BoardPopUp board={editingBoard} onClose={toggleModal}></BoardPopUp>
        </Modal>
      )}
    </>
  );
};

SideBarItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onHandleActiveBoard: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default SideBarItem;

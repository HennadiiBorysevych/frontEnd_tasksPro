import React from 'react';
import PropTypes from 'prop-types';

import { useBoardContext, useToggleModalAndSideBar } from 'contexts';
import { useAuth, useBoards, useModal } from 'hooks';

import { BoardPopUp } from 'components';
import { Modal, ReactConfirmAlert, SvgIcon } from 'ui';

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
  const { toggleModalAndSideBar } = useToggleModalAndSideBar();
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { activeBoardId } = useBoardContext();
  const { allBoards } = useBoards();
  const { theme } = useAuth();

  const editingBoard = allBoards.find(board => board.id === activeBoardId);

  const toggleWindows = () => {
    toggleModal();
    toggleModalAndSideBar();
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
            variant="support"
          />
          <BoardName isActive={active}>{title}</BoardName>
        </BoardIdentificationItem>
        {active && (
          <BoardItemControl>
            <button
              id="edit-board-button"
              aria-label="Edit board button"
              onClick={toggleWindows}
            >
              <SvgIcon svgName="icon-pencil" size={16} variant="support" />
            </button>
            <ReactConfirmAlert
              selectedTheme={theme}
              onDeleteAction={onDeleteClick}
              item="board and all content in it"
              owner="sidebar"
              onToggle={() => toggleModalAndSideBar()}
            />
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
  id: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onHandleActiveBoard: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default SideBarItem;

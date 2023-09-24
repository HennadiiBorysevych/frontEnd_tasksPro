import React from 'react';
import PropTypes from 'prop-types';

import { useBoardContext, useToggleModalAndSideBar } from 'contexts';
import { useBoardsCollector, useModal } from 'hooks';

import { ControlIcons, Modal, SvgIcon } from 'ui';

import BoardPopUp from '../boardPopUp/BoardPopUp';

import {
  BoardIdentificationItem,
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
  const { allBoards } = useBoardsCollector();

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
            variantIcon="support"
          />
          <BoardName isActive={active}>{title}</BoardName>
        </BoardIdentificationItem>
        {active && (
          <ControlIcons
            onClick={toggleWindows}
            ariaLabel="Edit board button"
            variantIcon="support"
            onDeleteAction={onDeleteClick}
            item="board and all content in it"
            owner="sidebar"
            onToggle={() => toggleModalAndSideBar()}
          />
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

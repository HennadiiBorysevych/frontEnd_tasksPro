import React from 'react';
import { useSelector } from 'react-redux';
import { useBoardContext, useModal } from 'hooks';
import PropTypes from 'prop-types';
import { selectTheme } from 'redux/auth/authSelectors';
import { selectAllBoards } from 'redux/boards/boardSelectors';
import { useToggleModalAndSideBar } from 'sharedLayout/SharedLayout';

import { BoardPopUp, Modal, SvgIcon } from 'components';

import ReactConfirmAlert from '../reactConfirmAlert/ReactConfirmAlert';

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
            variant="support"
          />
          <BoardName isActive={active}>{title}</BoardName>
        </BoardIdentificationItem>
        {active && (
          <BoardItemControl>
            <button aria-label="Edit board" onClick={toggleWindows}>
              <SvgIcon svgName="icon-pencil" size={16} variant="support" />
            </button>
            <ReactConfirmAlert
              selectedTheme={selectedTheme}
              onDeleteAction={onDeleteClick}
              item="board and all content in it"
              owner="sidebar"
              onToggle={onToggleModalAndSideBar}
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
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onHandleActiveBoard: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default SideBarItem;

import React from 'react';
import { useSelector } from 'react-redux';
import { useBoardContext, useModal } from 'hooks';
import PropTypes from 'prop-types';
import { selectAllBoards } from 'redux/boards/boardSelectors';

import { BoardPopUp, Modal, SvgIcon } from 'components';

import {
  BoardIdentificationItem,
  BoardItemControl,
  BoardListItem,
  BoardName,
} from './SideBarItem.styled';

const SideBarItem = ({
  iconName,
  title,
  active,
  onHandleActiveBoard,
  onDeleteClick,
  onToggleModalAndSideBar,
  onToggleControl,
}) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { activeBoardId } = useBoardContext();
  const boards = useSelector(selectAllBoards);

  console.log(active);
  console.log(onToggleControl);

  const editingBoard = boards.find(board => board.id === activeBoardId);
  return (
    <>
      <BoardListItem isActive={active}>
        <BoardIdentificationItem
          isActive={active}
          onClick={() => {
            onHandleActiveBoard();
            onToggleControl();
          }}
        >
          <SvgIcon
            svgName={`${iconName}`}
            size={18}
            stroke={active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'}
          />
          <BoardName isActive={active}>{title}</BoardName>
        </BoardIdentificationItem>
        {active && (
          <BoardItemControl>
            <button
              aria-label="Edit board"
              onClick={() => {
                toggleModal();
                onToggleModalAndSideBar();
              }}
            >
              <SvgIcon
                svgName="icon-pencil"
                size={16}
                stroke="rgba(255,255,255,0.5)"
              />
            </button>

            <button aria-label="Delete board" onClick={onDeleteClick}>
              <SvgIcon
                svgName="icon-trash"
                size={16}
                stroke="rgba(255,255,255,0.5)"
              />
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
  onToggleModalAndSideBar: PropTypes.func.isRequired,
  onToggleControl: PropTypes.func.isRequired,
};

export default SideBarItem;

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
  controlVisible,
}) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { activeBoardId } = useBoardContext();
  const boards = useSelector(selectAllBoards);

  console.log(active);
  console.log(activeBoardId);

  const editingBoard = boards.find(board => board.id === activeBoardId);
  return (
    <>
      <BoardListItem>
        <BoardIdentificationItem
          isActive={active}
          onClick={onHandleActiveBoard}
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
            <button onClick={onDeleteClick}>
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
  controlVisible: PropTypes.func.isRequired,
};

export default SideBarItem;

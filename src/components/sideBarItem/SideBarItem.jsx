import React from 'react';
import { useBoardsRedux } from 'redux/services';

import { useBoardContext, useToggleModalAndSideBar } from 'contexts';
import { useModal } from 'hooks';

import { ControlIcons, Modal, SvgIcon } from 'ui';

import BoardPopUp from '../boardPopUp/BoardPopUp';

import SideBarItemPropTypes from './propTypes';

import * as styles from './SideBarItem.styled';

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
  const { allBoards } = useBoardsRedux();

  const editingBoard = allBoards.find(board => board.id === activeBoardId);

  const toggleWindows = () => {
    toggleModal();
    toggleModalAndSideBar();
  };

  return (
    <>
      <styles.BoardListItem isActive={active}>
        <styles.BoardIdentificationItem
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
          <styles.BoardName
            variant="buttonPopUpAndDropdownText"
            isActive={active}
          >
            {title}
          </styles.BoardName>
        </styles.BoardIdentificationItem>
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
      </styles.BoardListItem>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <BoardPopUp board={editingBoard} onClose={toggleModal}></BoardPopUp>
        </Modal>
      )}
    </>
  );
};

export default SideBarItem;

SideBarItem.propTypes = SideBarItemPropTypes;

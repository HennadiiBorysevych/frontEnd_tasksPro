import React from 'react';
import { useBoardContext, useModal } from 'hooks';
import PropTypes from 'prop-types';

import { BoardPopUp, Modal, SvgIcon } from 'components';

import {
  AfterPseudoElement,
  BoardControl,
  BoardName,
  BoardNameItem,
  ItemWrapper,
} from './SideBarItem.styled';

const SideBarItem = ({
  iconName,
  title,
  // active,
  // onHandleActiveBoard,
  // onDeleteClick,
  // onToggleModalAndSideBar,
}) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  // const { boards, activeBoardId } = useBoardContext();

  // const editingBoard = boards.find(board => board.id === activeBoardId);
  return (
    <>
      <ItemWrapper>
        <BoardNameItem>
          <SvgIcon
            svgName={`${iconName}`}
            size={18}
            stroke="rgba(255, 255, 255, 0.5)"
            // stroke={active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'}
          />
          <BoardName>{title}</BoardName>
        </BoardNameItem>
        {/* {active && ( */}
        <BoardControl>
          <button
          // onClick={() => {
          //   toggleModal();
          //   onToggleModalAndSideBar();
          // }}
          >
            <SvgIcon
              svgName="icon-pencil"
              size={16}
              stroke="rgba(255,255,255,0.5)"
            />
          </button>
          <button>
            <SvgIcon
              svgName="icon-trash"
              size={16}
              stroke="rgba(255,255,255,0.5)"
            />
          </button>
        </BoardControl>

        {/* )} */}
        <AfterPseudoElement />
        {/* {active && <AfterPseudoElement isActive={true} />} */}
      </ItemWrapper>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <BoardPopUp onClose={toggleModal}></BoardPopUp>
        </Modal>
      )}
      {/* <ItemWrapper>
        <BoardNameItem isActive={active} onClick={onHandleActiveBoard}>
          <SvgIcon
            svgName={`${iconName}`}
            size={18}
            stroke={active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'}
          />
          <BoardName isActive={active}>{title}</BoardName>
        </BoardNameItem>
        {active && (
          <BoardControl isActive={true}>
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
          </BoardControl>
        )}
        {active && <AfterPseudoElement isActive={true} />}
      </ItemWrapper>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <BoardPopUp board={editingBoard} onClose={toggleModal}></BoardPopUp>
        </Modal>
      )} */}
    </>
  );
};

// SideBarItem.propTypes = {
//   iconName: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   onHandleActiveBoard: PropTypes.func.isRequired,
//   onDeleteClick: PropTypes.func.isRequired,
//   onToggleModalAndSideBar: PropTypes.func.isRequired,
// };

export default SideBarItem;

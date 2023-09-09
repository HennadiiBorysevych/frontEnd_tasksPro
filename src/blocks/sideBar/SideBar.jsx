import React from 'react';

import { useBoardContext, useToggleModalAndSideBar } from 'contexts';
import { useModal } from 'hooks';

import {
  BoardPopUp,
  Logo,
  SideBarBoardsList,
  SignOut,
  Support,
} from 'components';
import { ButtonPlus, CustomScrollBar, Modal } from 'ui';

import {
  CreateBoard,
  Overlay,
  SideBarWrapper,
  TitleBoardList,
  TitleButton,
} from './SideBar.styled';

const SideBar = () => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { activeBoardId } = useBoardContext();
  const { isOpen, windowHeight, closeSideBar, toggleModalAndSideBar } =
    useToggleModalAndSideBar();

  return (
    <>
      <SideBarWrapper isOpen={isOpen} windowHeight={windowHeight}>
        <CustomScrollBar width="100%" overflow="auto">
          <div>
            <Logo variant="bord" />
            <TitleBoardList variant="taskDescription">My boards</TitleBoardList>
            <CreateBoard
              type="button"
              id="create-new-board-button"
              onClick={() => {
                toggleModal();
                toggleModalAndSideBar();
              }}
            >
              <TitleButton>
                Create a <br />
                new board
              </TitleButton>
              <ButtonPlus width={40} height={36} variant="sidemenu" size={20} />
            </CreateBoard>
            {activeBoardId && <SideBarBoardsList windowHeight={windowHeight} />}
          </div>
          <div>
            <Support />
            <SignOut />
          </div>
        </CustomScrollBar>
      </SideBarWrapper>
      {isOpen && <Overlay onClick={() => closeSideBar()} />}
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <BoardPopUp onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default SideBar;

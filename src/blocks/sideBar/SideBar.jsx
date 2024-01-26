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

import * as styles from './SideBar.styled';

const SideBar = () => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { activeBoardId } = useBoardContext();
  const { isOpen, windowHeight, closeSideBar, toggleModalAndSideBar } =
    useToggleModalAndSideBar();

  return (
    <>
      <styles.SideBarWrapper isOpen={isOpen} windowHeight={windowHeight}>
        <CustomScrollBar
          width="100%"
          variantScroll="sidebar"
          height="100%"
          overflow="auto"
        >
          <styles.SideBarContainer>
            <div>
              <Logo variantLogo="board" />
              <styles.TitleBoardList variant="supplementaryPopUpText">
                My boards
              </styles.TitleBoardList>
              <styles.CreateBoard
                type="button"
                id="create-new-board-button"
                onClick={() => {
                  toggleModal();
                  toggleModalAndSideBar();
                }}
              >
                <styles.TitleButton variant="buttonPopUpAndDropdownText">
                  Create a <br />
                  new board
                </styles.TitleButton>
                <ButtonPlus
                  width={40}
                  height={36}
                  variantIcon="sidemenu"
                  size={20}
                />
              </styles.CreateBoard>
              {activeBoardId && (
                <SideBarBoardsList windowHeight={windowHeight} />
              )}
            </div>
            <div>
              <Support />
              <SignOut />
            </div>
          </styles.SideBarContainer>
        </CustomScrollBar>
      </styles.SideBarWrapper>
      {isOpen && <styles.Overlay onClick={() => closeSideBar()} />}
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <BoardPopUp onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default SideBar;

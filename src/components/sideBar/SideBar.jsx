import React from 'react';
import { useBoardContext, useModal } from 'hooks';
import PropTypes from 'prop-types';

import { CustomScrollbar } from 'components';
import {
  BoardPopUp,
  ButtonPlus,
  Logo,
  Modal,
  SideBarBoardsList,
  SignOut,
  Support,
} from 'components';

import {
  CreateBoard,
  Overlay,
  SideBarWrapper,
  TitleBoardList,
  TitleButton,
} from './SideBar.styled';

const SideBar = ({
  isOpen,
  isClose,
  windowHeight,
  onToggleModalAndSideBar,
}) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { activeBoardId } = useBoardContext();

  return (
    <>
      <SideBarWrapper isOpen={isOpen} windowHeight={windowHeight}>
        <div>
          <Logo variant="bord" />
          <TitleBoardList>My boards</TitleBoardList>
          <CreateBoard
            type="button"
            onClick={() => {
              toggleModal();
              onToggleModalAndSideBar();
            }}
          >
            <TitleButton>
              Create a <br />
              new board
            </TitleButton>
            <ButtonPlus
              width={40}
              height={36}
              stroke="#121212"
              backgroundColor="#BEDBB0"
              size={20}
            />
          </CreateBoard>
          {activeBoardId && <SideBarBoardsList />}
        </div>
        <div>
          <Support />
          <SignOut />
        </div>
      </SideBarWrapper>
      {isOpen && <Overlay onClick={isClose} />}
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <BoardPopUp onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default SideBar;

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isClose: PropTypes.func.isRequired,
  onToggleModalAndSideBar: PropTypes.func.isRequired,
};

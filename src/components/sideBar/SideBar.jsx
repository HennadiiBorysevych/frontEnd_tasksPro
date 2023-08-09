import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useModal } from 'hooks';
import PropTypes from 'prop-types';

import operations from 'redux/boards/boardOperations';
import boardSelectors from 'redux/boards/boardSelectors';

import {
  BoardPopUp,
  ButtonPlus,
  Logo,
  Modal,
  SideBarItem,
  SignOut,
  Support,
} from 'components';

import {
  BoardList,
  CreateBoard,
  Overlay,
  SideBarWrapper,
  TitleBoardList,
  TitleButton,
} from './SideBar.styled';
import { useDispatch, useSelector } from 'react-redux';

const SideBar = ({ isOpen, isClose, windowHeight, onCreateBoardClick }) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const boardNam = useParams();
  const boards = useSelector(boardSelectors.selectAllBoards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchBoards());
  }, []);

  // console.log(boardName);

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
              onCreateBoardClick();
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
          {/* {boardName && ( */}
          <BoardList>
            {boards.map(({ id, iconName, title }) => (
              // <NavLink to={`/home/${id}`} >
              <SideBarItem
                style={{ marginBottom: '10px' }}
                key={id}
                id={id}
                iconName={iconName}
                title={title}
              />
              // </NavLink>
            ))}
          </BoardList>
          {/* )} */}
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
  onCreateBoardClick: PropTypes.func.isRequired,
};

import React from 'react';
import { Outlet } from 'react-router-dom';
import { useModal } from 'hooks';
import SharedLayout from 'sharedLayout/SharedLayout';
import { BoardHead, BoardPopUp, Modal } from 'components';
import {
  BoardWrap,
  BoardBody,
  WelcomeText,
  CreateBoardLink,
} from './homePage.styled';
import BoardSettings from '../components/boardSettings/BoardSettings';
const HomePage = () => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const boardName = false;
  let BoardTitle = 'Project Office';
  let icon = '';
  let bg = '';

  return (
    <SharedLayout>
      <BoardWrap>
        <BoardHead boardName={boardName} />

        <BoardBody>
          {boardName ? (
            <>
              <Outlet />
            </>
          ) : (
            <>
              <WelcomeText>
                Before starting your project, it is essential to{' '}
                <CreateBoardLink onClick={toggleModal}>
                  create a board
                </CreateBoardLink>{' '}
                to visualize and track all the necessary tasks and milestones.
                This board serves as a powerful tool to organize the workflow
                and ensure effective collaboration among team members.
              </WelcomeText>
            </>
          )}
          {isModal && (
            <Modal onBackdropClick={onBackdropClick}>
              <BoardPopUp
                title={BoardTitle}
                iconName={icon}
                bg={bg}
                onClose={toggleModal}
              />
            </Modal>
          )}
        </BoardBody>
      </BoardWrap>
    </SharedLayout>
  );
};
export default HomePage;

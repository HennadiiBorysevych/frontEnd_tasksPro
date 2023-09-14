import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { SharedLayout } from 'layouts';

import { useBoardContext } from 'contexts';
import {
  useBackground,
  useBoardsCollector,
  useCardsCollector,
  useColumnsCollector,
  useModal,
} from 'hooks';

import { BoardPopUp, SkeletonLoader } from 'components';
import { Modal } from 'ui';

import {
  BoardWrap,
  CreateBoardLink,
  DefaultWrapper,
  WelcomeText,
} from './styles/homePage.styled';

const HomePage = () => {
  const { activeBoardId, setActiveBoard } = useBoardContext();
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const [backgroundImage] = useBackground();
  const { allBoards, boardLoading, getAllBoards } = useBoardsCollector();
  const { getAllColumns } = useColumnsCollector();
  const { getAllCards } = useCardsCollector();

  const navigate = useNavigate();

  useEffect(() => {
    getAllBoards();
  }, [getAllBoards]);

  const hasBoards = allBoards.length > 0;

  // Отримання id активної дошки та розкодування id в назву і її додавання до адресного рядка
  useEffect(() => {
    if (hasBoards) {
      const firstBoard = allBoards[0];

      if (firstBoard) {
        setActiveBoard(firstBoard?.id);
        const encodedTitle = encodeURIComponent(firstBoard?.title);
        navigate(`${encodedTitle}`);
      }
    }
  }, [allBoards, navigate, activeBoardId, setActiveBoard, hasBoards]);

  useEffect(() => {
    function fetchData() {
      if (activeBoardId) {
        getAllColumns(activeBoardId);
        getAllCards(activeBoardId);
      }
    }

    fetchData();
  }, [activeBoardId, hasBoards, getAllCards, getAllColumns]);

  return (
    <SharedLayout>
      <BoardWrap bg={backgroundImage}>
        {activeBoardId ? (
          <Outlet />
        ) : (
          <DefaultWrapper defaultBoard={!allBoards}>
            {boardLoading ? (
              <SkeletonLoader page="/board" />
            ) : (
              <WelcomeText>
                Before starting your project, it is essential to{' '}
                <CreateBoardLink
                  href="#"
                  aria-label="Create board"
                  onClick={toggleModal}
                >
                  create a board
                </CreateBoardLink>{' '}
                to visualize and track all the necessary tasks and milestones.
                This board serves as a powerful tool to organize the workflow
                and ensure effective collaboration among team members.
              </WelcomeText>
            )}
          </DefaultWrapper>
        )}
        {isModal && (
          <Modal onBackdropClick={onBackdropClick}>
            <BoardPopUp onClose={toggleModal} />
          </Modal>
        )}
      </BoardWrap>
    </SharedLayout>
  );
};
export default HomePage;

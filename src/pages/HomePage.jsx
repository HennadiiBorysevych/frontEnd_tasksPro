import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  useBackground,
  useBoardContext,
  useBoards,
  useCards,
  useColumns,
  useModal,
} from 'hooks';
import SharedLayout from 'sharedLayout/SharedLayout';

import { BoardPopUp, Modal } from 'components';
import SkeletonLoader from 'components/skeleton/SkeletonLoader';

import {
  BoardWrap,
  CreateBoardLink,
  DefaultWrapper,
  WelcomeText,
} from './styles/homePage.styled';

const HomePage = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const { activeBoardId, setActiveBoard } = useBoardContext();
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const [backgroundImage] = useBackground();
  const { allBoards, boardLoading, getAllBoards } = useBoards();
  const { getAllColumns } = useColumns();
  const { getAllCards } = useCards();

  const navigate = useNavigate();

  useEffect(() => {
    getAllBoards();
  }, [getAllBoards]);

  // Отримання id активної дошки та розкодування id в назву і її додавання до адресного рядка
  useEffect(() => {
    if (firstLoad && allBoards.length > 0) {
      const firstBoard = allBoards[0];
      if (firstBoard) {
        setActiveBoard(firstBoard.id);

        const encodedTitle = encodeURIComponent(firstBoard.title);
        navigate(`${encodedTitle}`);
      }
      setFirstLoad(false);
      setActiveBoard(null);
    }
  }, [allBoards, firstLoad, navigate, setActiveBoard]);

  useEffect(() => {
    async function fetchData() {
      if (activeBoardId) {
        await getAllColumns(activeBoardId);
        await getAllCards(activeBoardId);
      }
    }

    fetchData();
  }, [activeBoardId, getAllCards, getAllColumns]);

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
                <CreateBoardLink onClick={toggleModal}>
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

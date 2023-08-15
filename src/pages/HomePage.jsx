import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { useBackground, useBoardContext, useModal } from 'hooks';
import { boardsOperations } from 'redux/boards';
import { selectAllBoards } from 'redux/boards/boardSelectors';
import { columnsOperations } from 'redux/columns';
import { cardOperations } from 'redux/tasks';
import SharedLayout from 'sharedLayout/SharedLayout';

import { BoardPopUp, Modal } from 'components';

import {
  BoardWrap,
  CreateBoardLink,
  DefaultWrapper,
  WelcomeText,
} from './styles/homePage.styled';

const HomePage = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const { activeBoardId, activeBoard, setActiveBoard } = useBoardContext();
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const [backgroundImage] = useBackground();
  const boards = useSelector(selectAllBoards);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('fetch');
    dispatch(boardsOperations.fetchBoards());
  }, [dispatch]);

  // Отримання id активної дошки та розкодування id в назву і її додавання до адресного рядка
  useEffect(() => {
    if (firstLoad && boards.length > 0) {
      const firstBoard = boards[0];
      if (firstBoard) {
        setActiveBoard(firstBoard.id);

        const encodedTitle = encodeURIComponent(firstBoard.title);
        navigate(`${encodedTitle}`);
      }
      setFirstLoad(false);
    }
  }, [activeBoard, activeBoardId, boards, firstLoad, navigate, setActiveBoard]);

  useEffect(() => {
    async function fetchData() {
      if (activeBoardId) {
        await dispatch(columnsOperations.fetchColumns(activeBoardId));
        await dispatch(cardOperations.fetchTasks(activeBoardId));
      }
    }

    fetchData();
  }, [dispatch, activeBoardId]);

  return (
    <SharedLayout>
      <BoardWrap bg={backgroundImage}>
        {activeBoardId ? (
          <>
            <Outlet />
          </>
        ) : (
          <DefaultWrapper defaultBoard={!boards}>
            <WelcomeText>
              Before starting your project, it is essential to{' '}
              <CreateBoardLink onClick={toggleModal}>
                create a board
              </CreateBoardLink>{' '}
              to visualize and track all the necessary tasks and milestones.
              This board serves as a powerful tool to organize the workflow and
              ensure effective collaboration among team members.
            </WelcomeText>
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

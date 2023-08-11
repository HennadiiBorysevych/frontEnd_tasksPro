import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { useBackground, useBoardContext, useModal } from 'hooks';
import { fetchBoards } from 'redux/boards/boardOperations';
import { selectAllBoards } from 'redux/boards/boardSelectors';
import { fetchColumns } from 'redux/columns/operations';
import { fetchTasks } from 'redux/tasks/cardOperations';
import SharedLayout from 'sharedLayout/SharedLayout';

import { BoardPopUp, Modal } from 'components';

import {
  BoardWrap,
  CreateBoardLink,
  DefaultWrapper,
  WelcomeText,
} from './styles/homePage.styled';

const HomePage = () => {
  const { activeBoardId, setActiveBoard } = useBoardContext();
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const [backgroundImage] = useBackground('moon');
  const boards = useSelector(selectAllBoards);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  // Отримання id активної дошки та озкодування id в назву і її додавання до адресного рядка
  useEffect(() => {
    if (boards.length > 0 || !activeBoardId) {
      const firstBoard = boards[0];
      console.log(firstBoard);
      if (firstBoard) {
        setActiveBoard(firstBoard.id);

        const encodedTitle = encodeURIComponent(firstBoard.title);
        navigate(`${encodedTitle}`);
      }
    }
  }, [activeBoardId, boards, navigate, setActiveBoard]);

  useEffect(() => {
    if (activeBoardId) {
      dispatch(fetchColumns(activeBoardId));
      dispatch(fetchTasks(activeBoardId));
      //    dispatch(operations.fetchColumnsTasks(activeBoardId));
    }
  }, [dispatch, activeBoardId]);

  return (
    <SharedLayout>
      <BoardWrap bg={backgroundImage}>
        {activeBoardId ? (
          <>
            <Outlet activeBoard={activeBoardId} />
          </>
        ) : (
          <>
            <DefaultWrapper>
              <WelcomeText>
                Before starting your project, it is essential to{' '}
                <CreateBoardLink onClick={toggleModal}>
                  create a board
                </CreateBoardLink>{' '}
                to visualize and track all the necessary tasks and milestones.
                This board serves as a powerful tool to organize the workflow
                and ensure effective collaboration among team members.
              </WelcomeText>
            </DefaultWrapper>
          </>
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

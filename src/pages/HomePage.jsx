import React, { useState } from 'react';
import SharedLayout from 'sharedLayout/SharedLayout';
import Board from 'pages/Board';
import { BoardHead, BoardPopUp } from 'components';
import {
  BoardWrap,
  BoardBody,
  WelcomeText,
  CreateBoardLink,
} from './homePage.styled';

const HomePage = () => {
  const [isBoardPopUpOpen, setIsBoardPopUpOpen] = useState(false);
  const boardName = false;

  const openBoardPopUp = () => {
    setIsBoardPopUpOpen(true);
  };

  const closeBoardPopUp = () => {
    setIsBoardPopUpOpen(false);
  };
  return (
    <>
      <SharedLayout />
      <BoardWrap>
        <BoardHead boardName={boardName} />

        <BoardBody>
          {boardName ? (
            <Board />
          ) : (
            <WelcomeText>
              Before starting your project, it is essential to{' '}
              <CreateBoardLink onClick={openBoardPopUp}>
                create a board
              </CreateBoardLink>{' '}
              to visualize and track all the necessary tasks and milestones.
              This board serves as a powerful tool to organize the workflow and
              ensure effective collaboration among team members.
            </WelcomeText>
          )}
          {isBoardPopUpOpen && <BoardPopUp onClose={closeBoardPopUp} />}
        </BoardBody>
      </BoardWrap>
    </>
  );
};
export default HomePage;

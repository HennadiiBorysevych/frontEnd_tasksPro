import React from 'react';
import {
  BoardList,
  CreateBoard,
  Overlay,
  SideBarWrapper,
  TitleBoardList,
  TitleButton,
} from './SideBar.styled';
import { ButtonPlus, Logo, SideBarItem, SignOut, Support } from 'components';
import { useParams } from 'react-router-dom';

const SideBar = ({ isOpen, isClose }) => {
  const { boardName } = useParams();
  const boards = [];

  return (
    <>
      <SideBarWrapper isOpen={isOpen}>
        <Logo />
        <TitleBoardList>My boards</TitleBoardList>
        <CreateBoard type="submit">
          <TitleButton>
            Create a <br />
            new board
          </TitleButton>
          <ButtonPlus width={40} height={36} stroke="#121212" />
        </CreateBoard>
        {boardName && (
          <BoardList>
            {boards.map(({ id, iconName, title }) => (
              <SideBarItem key={id} iconName={iconName} title={title} />
            ))}
          </BoardList>
        )}

        <Support />
        <SignOut />
      </SideBarWrapper>
      {isOpen && <Overlay onClick={isClose} />}
    </>
  );
};

export default SideBar;

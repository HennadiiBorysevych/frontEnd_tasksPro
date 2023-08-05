import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ButtonPlus, Logo, SideBarItem, SignOut, Support } from 'components';
import {
  BoardList,
  CreateBoard,
  Overlay,
  SideBarWrapper,
  TitleBoardList,
  TitleButton,
} from './SideBar.styled';

const SideBar = ({ isOpen, isClose, windowHeight }) => {
  const { boardName } = useParams();
  const boards = [];

  return (
    <>
      <SideBarWrapper isOpen={isOpen} windowHeight={windowHeight}>
        <Logo />
        <TitleBoardList>My boards</TitleBoardList>
        <CreateBoard type="submit">
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

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isClose: PropTypes.func.isRequired,
};

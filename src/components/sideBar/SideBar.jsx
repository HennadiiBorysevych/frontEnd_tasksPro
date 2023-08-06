import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  BoardPopUp,
  ButtonPlus,
  Logo,
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

const SideBar = ({ isOpen, isClose, windowHeight }) => {
  const [isBoardPopUpOpen, setIsBoardPopUpOpen] = useState(false);
  const { boardName } = useParams();
  const boards = [];

  const openBoardPopUp = () => {
    setIsBoardPopUpOpen(true);
  };

  const closeBoardPopUp = () => {
    setIsBoardPopUpOpen(false);
  };

  return (
    <>
      <SideBarWrapper isOpen={isOpen} windowHeight={windowHeight}>
        <div>
          <Logo style={{ color: '#ffffff' }} />
          <TitleBoardList>My boards</TitleBoardList>
          <CreateBoard type="button" onClick={openBoardPopUp}>
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
        </div>
        <div>
          <Support />
          <SignOut />
        </div>
      </SideBarWrapper>
      {isOpen && <Overlay onClick={isClose} />}
      {isBoardPopUpOpen && <BoardPopUp onClose={closeBoardPopUp} />}
    </>
  );
};

export default SideBar;

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isClose: PropTypes.func.isRequired,
};

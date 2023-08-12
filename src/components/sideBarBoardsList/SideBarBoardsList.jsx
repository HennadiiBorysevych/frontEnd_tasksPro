import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useBoardContext } from 'hooks';
import PropTypes from 'prop-types';
import {
  deleteBoard,
  fetchBoards,
  getBoard,
} from 'redux/boards/boardOperations';
import { selectAllBoards } from 'redux/boards/boardSelectors';

import { CustomScrollbar, SideBarItem } from 'components';

import { BoardList } from './sideBarBoardsList.styled';

const SideBarBoardsList = onToggleModalAndSideBar => {
  const { activeBoardId, setActiveBoard } = useBoardContext();
  const boards = useSelector(selectAllBoards);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleActiveBoard = async boardId => {
    try {
      await dispatch(getBoard(boardId));
      await setActiveBoard(boardId);
      const activatedBoard = await boards.find(board => board.id === boardId);

      if (activatedBoard) {
        const encodedTitle = encodeURIComponent(activatedBoard.title);
        navigate(`${encodedTitle}`);
      }
    } catch (error) {
      console.error('Error getting board data', error);
    }
  };

  const handleDeleteBoard = async id => {
    const confirmDelete = window.confirm(
      'Ви впевнені, що хочете видалити борд?'
    );
    try {
      if (confirmDelete) {
        await dispatch(deleteBoard(id));
        console.log('Board has deleted');
        await dispatch(fetchBoards());
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <CustomScrollbar height="100%">
      <BoardList>
        {boards.map(({ id, icon, title }) => (
          <SideBarItem
            key={id}
            id={id}
            iconName={icon}
            title={title}
            active={activeBoardId === id}
            onHandleActiveBoard={() => handleActiveBoard(id)}
            onDeleteClick={() => handleDeleteBoard(id)}
            onToggleModalAndSideBar={() => onToggleModalAndSideBar()}
          />
        ))}
      </BoardList>
    </CustomScrollbar>
  );
};

export default SideBarBoardsList;

SideBarBoardsList.propTypes = {
  onToggleModalAndSideBar: PropTypes.func.isRequired,
};

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useBoardContext } from 'hooks';
import {
  deleteBoard,
  fetchBoards,
  getBoard,
} from 'redux/boards/boardOperations';
import { selectAllBoards } from 'redux/boards/boardSelectors';

import { SideBarItem } from 'components';

import { BoardList } from './sideBarBoardsList.styled';

const SideBarBoardsList = onToggleModalAndSideBar => {
  const { activeBoardId, setActiveBoard } = useBoardContext();
  const boards = useSelector(selectAllBoards);
  const [isControlVisible, setIsControlVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleActiveBoard = async boardId => {
    try {
      await dispatch(getBoard(boardId));
      await setActiveBoard(boardId);
      const activatedBoard = boards.find(board => board.id === boardId);
      if (activatedBoard) {
        const encodedTitle = encodeURIComponent(activatedBoard.title);
        navigate(`${encodedTitle}`);
      }
      setIsControlVisible(!isControlVisible);
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
    <BoardList>
      {boards.map(({ id, icon, title }) => (
        <SideBarItem
          key={id}
          iconName={icon}
          title={title}
          active={activeBoardId === id}
          onHandleActiveBoard={() => handleActiveBoard(id)}
          onDeleteClick={() => handleDeleteBoard(id)}
          onToggleModalAndSideBar={() => onToggleModalAndSideBar()}
          boards={boards}
        />
      ))}
    </BoardList>
  );
};

export default SideBarBoardsList;

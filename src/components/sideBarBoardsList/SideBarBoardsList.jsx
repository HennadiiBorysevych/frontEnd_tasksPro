import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useBoardContext } from 'hooks';
import { selectTheme } from 'redux/auth/authSelectors';
import {
  deleteBoard,
  fetchBoards,
  getBoard,
} from 'redux/boards/boardOperations';
import { selectAllBoards } from 'redux/boards/boardSelectors';

import { CustomScrollbar, SideBarItem } from 'components';

import 'react-toastify/dist/ReactToastify.css';
import { BoardList } from './sideBarBoardsList.styled';

const SideBarBoardsList = () => {
  const { activeBoardId, setActiveBoard } = useBoardContext();
  const boards = useSelector(selectAllBoards);
  const selectedTheme = useSelector(selectTheme);
  const toastClassName = selectedTheme === 'Dark' ? 'dark' : 'light';
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
    try {
      await dispatch(deleteBoard(id));
      console.log('Board has deleted');
      await dispatch(fetchBoards());
      await toast.success('Board has deleted');
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <CustomScrollbar width="100%" height="126px" overflow="auto">
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
          />
        ))}
      </BoardList>
      <ToastContainer position="top-left" theme={toastClassName} />
    </CustomScrollbar>
  );
};

export default SideBarBoardsList;

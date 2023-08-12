import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useBoardContext } from 'hooks';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import PropTypes from 'prop-types';
import { boardsOperations } from 'redux/boards';
import { boardsSelectors } from 'redux/boards';

import { SideBarItem } from 'components';

import { BoardList } from './sideBarBoardsList.styled';

const SideBarBoardsList = onToggleModalAndSideBar => {
  const { activeBoardId } = useBoardContext();
  const boards = useSelector(boardsSelectors.selectAllBoards);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleActiveBoard = async boardId => {
    try {
      await dispatch(boardsOperations.getBoard(boardId));
      const activatedBoard = boards.find(board => board.id === boardId);

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
        await dispatch(boardsOperations.deleteBoard(id));
        console.log('Board has deleted');
        await dispatch(boardsOperations.fetchBoards());
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
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
      <OverlayScrollbarsComponent
        className="overlayscrollbars-react"
        style={{ width: '100px', height: '100px' }}
        options={{
          overflow: { x: 'hidden', y: 'scroll' },
          scrollbars: { theme: 'os-theme-dark' },
        }}
        defer
      />
    </>
  );
};

export default SideBarBoardsList;

SideBarBoardsList.propTypes = {
  onToggleModalAndSideBar: PropTypes.func.isRequired,
};

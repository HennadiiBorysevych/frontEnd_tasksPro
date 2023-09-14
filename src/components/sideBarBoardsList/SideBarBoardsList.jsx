import React from 'react';

import { useBoard, useBoardsCollector } from 'hooks';

import { CustomScrollBar } from 'ui';

import SideBarItem from '../sideBarItem/SideBarItem';

import { BoardList } from './sideBarBoardsList.styled';

const SideBarBoardsList = () => {
  const { allBoards } = useBoardsCollector();
  const { activeBoardId, handleActiveBoard, handleDeleteBoard } = useBoard();

  return (
    <CustomScrollBar width="100%" variant="boardList" overflow="auto">
      <BoardList>
        {allBoards.map(({ id, icon, title }) => (
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
    </CustomScrollBar>
  );
};

export default SideBarBoardsList;

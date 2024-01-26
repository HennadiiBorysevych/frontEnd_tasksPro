import React from 'react';
import { useBoardsRedux } from 'redux/services';

import { useBoard } from 'hooks';

import { CustomScrollBar } from 'ui';

import SideBarItem from '../sideBarItem/SideBarItem';

import * as styles from './sideBarBoardsList.styled';

const SideBarBoardsList = () => {
  const { allBoards } = useBoardsRedux();
  const { activeBoardId, handleActiveBoard, handleDeleteBoard } = useBoard();

  return (
    <CustomScrollBar width="100%" variantScroll="boardList" overflow="auto">
      <styles.BoardList>
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
      </styles.BoardList>
    </CustomScrollBar>
  );
};

export default SideBarBoardsList;

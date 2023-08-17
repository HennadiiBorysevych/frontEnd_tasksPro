import React from 'react';
import { useParams } from 'react-router-dom';
import { useBoards } from 'hooks';

import { Filters } from 'components';

import { BoardTitle, Header } from './boardHead.styled';

const BoardHead = () => {
  const { activeBoard } = useBoards();
  const { boardId } = useParams();
  const decodedTitle = decodeURIComponent(boardId);
  return (
    <>
      <Header boardName={activeBoard} active={decodedTitle === activeBoard}>
        {!!decodedTitle && (
          <BoardTitle variant="projectTitle">{activeBoard.title}</BoardTitle>
        )}
        <Filters />
      </Header>
    </>
  );
};

export default BoardHead;

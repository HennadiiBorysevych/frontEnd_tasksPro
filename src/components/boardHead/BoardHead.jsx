import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectActiveBoard } from 'redux/boards/boardSelectors';

import { Filters } from 'components';

import { BoardTitle, Header } from './boardHead.styled';

const BoardHead = () => {
  const { boardId } = useParams();
  const decodedTitle = decodeURIComponent(boardId);
  const activeBoard = useSelector(selectActiveBoard);
  return (
    <>
      <Header boardName={activeBoard} active={decodedTitle === activeBoard}>
        {!!decodedTitle && <BoardTitle>{activeBoard.title}</BoardTitle>}
        <Filters />
      </Header>
    </>
  );
};

export default BoardHead;

import React from 'react';
import { useParams } from 'react-router-dom';

import { Filters } from 'components';

import { BoardTitle, Header } from './boardHead.styled';

const BoardHead = ({ activeBoard }) => {
  const { boardId } = useParams();
  const decodedTitle = decodeURIComponent(boardId);

  return (
    <>
      <Header boardName={activeBoard}>
        {!!decodedTitle && <BoardTitle>{decodedTitle}</BoardTitle>}
        <Filters />
      </Header>
    </>
  );
};

export default BoardHead;

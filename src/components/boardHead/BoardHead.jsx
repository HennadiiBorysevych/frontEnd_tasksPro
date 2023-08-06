import React from 'react';
import { Filters } from 'components';
import { BoardTitle, Header } from './boardHead.styled';

const BoardHead = ({ boardName }) => {
  return (
    <>
      {!boardName && (
        <Header>
          <BoardTitle>{boardName}Project Office</BoardTitle>
          <Filters />
        </Header>
      )}
    </>
  );
};

export default BoardHead;

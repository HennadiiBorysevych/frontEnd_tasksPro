import Filters from 'components/filters/Filters';
import React from 'react';
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

import React from 'react';

import { Filters } from 'components';

import { BoardTitle, Header } from './boardHead.styled';

const BoardHead = ({ boardName }) => {
  return (
    <>
      <Header
        style={
          boardName
            ? { justifyContent: 'space-between' }
            : { justifyContent: 'flex-end' }
        }
      >
        {!!boardName && <BoardTitle>{boardName}Project Office</BoardTitle>}
        <Filters />
      </Header>
    </>
  );
};

export default BoardHead;

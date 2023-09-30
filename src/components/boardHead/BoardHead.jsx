import React from 'react';

import { useBoard, useBoardsCollector } from 'hooks';

import Filters from '../filters/Filters';

import { FieldInput, Header } from './boardHead.styled';

const BoardHead = () => {
  const { activeBoard, activeBoardId, allBoards } = useBoardsCollector();
  const editingBoard = allBoards.find(board => board.id === activeBoardId);

  const { title, decodedTitle, handleTitle, handleBoardSubmit } =
    useBoard(editingBoard);

  return (
    <>
      <Header
        boardName={editingBoard?.title}
        active={decodedTitle === activeBoard?.id}
      >
        {!!decodedTitle && (
          <FieldInput
            id="standard"
            aria-label="Change board name"
            type="text"
            variant="standard"
            value={title}
            placeholder={editingBoard?.title}
            onChange={handleTitle}
            onBlur={handleBoardSubmit}
            fullWidth={true}
          />
        )}
        <Filters />
      </Header>
    </>
  );
};

export default BoardHead;

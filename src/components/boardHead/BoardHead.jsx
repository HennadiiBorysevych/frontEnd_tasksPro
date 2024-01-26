import React from 'react';
import { useBoardsRedux } from 'redux/services';

import { useBoard } from 'hooks';

import Filters from '../filters/Filters';

import * as styles from './boardHead.styled';

const BoardHead = () => {
  const { activeBoard, activeBoardId, allBoards } = useBoardsRedux();
  const editingBoard = allBoards.find(board => board.id === activeBoardId);

  const { title, decodedTitle, handleTitle, handleBoardSubmit } =
    useBoard(editingBoard);

  return (
    <>
      <styles.Header
        boardName={editingBoard?.title}
        active={decodedTitle === activeBoard?.id}
      >
        {!!decodedTitle && (
          <styles.FieldInput
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
      </styles.Header>
    </>
  );
};

export default BoardHead;

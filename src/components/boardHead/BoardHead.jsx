import React, { useCallback, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { encodedTitleInUrl } from 'helpers';
import { useBoards } from 'hooks';

import { Filters } from 'components';

import { Header } from './boardHead.styled';

const BoardHead = () => {
  const { activeBoard, activeBoardId, allBoards, updateExistingBoard } =
    useBoards();
  const [editingBoard, setEditingBoard] = useState(
    allBoards.find(board => board.id === activeBoardId)
  );
  const [title, setTitle] = useState(editingBoard?.title);

  useEffect(() => {
    const updatedBoard = allBoards?.find(board => board.id === activeBoardId);
    setEditingBoard(updatedBoard);
  }, [activeBoardId, allBoards]);

  useEffect(() => {
    setTitle(editingBoard?.title);
  }, [editingBoard]);

  const handleTitle = useCallback(e => {
    setTitle(e.currentTarget.value);
  }, []);

  const handleBoardChange = () => {
    const { id, user, ...rest } = editingBoard;

    updateExistingBoard({
      boardId: id,
      updatedData: { ...rest, title: title },
    });
    encodedTitleInUrl(title);
  };

  const decodedTitle = decodeURIComponent(editingBoard.id);

  return (
    <>
      <Header
        boardName={editingBoard.title}
        active={decodedTitle === activeBoard.id}
      >
        {!!decodedTitle && (
          <TextField
            id="standard"
            type="text"
            variant="standard"
            value={title}
            onChange={handleTitle}
            onBlur={handleBoardChange}
            fullWidth={true}
          />
        )}
        <Filters />
      </Header>
    </>
  );
};

export default BoardHead;

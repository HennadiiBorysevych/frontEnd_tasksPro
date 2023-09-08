import React, { useCallback, useEffect, useState } from 'react';

import { encodedTitleInUrl } from 'helpers';
import { useBoards } from 'hooks';

import { Filters } from 'components';

import { FieldInput, Header } from './boardHead.styled';

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

  const handleBoardChange = async () => {
    const { id, user, ...rest } = editingBoard;

    await updateExistingBoard({
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
          <FieldInput
            id="standard"
            aria-label="Change board name"
            type="text"
            variant="standard"
            value={title}
            placeholder={title}
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

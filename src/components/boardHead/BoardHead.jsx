import React, { useCallback, useEffect, useState } from 'react';

import { useBoardContext } from 'contexts';
import { encodeTitleBoardInUrl } from 'helpers';
import { useBoardsCollector } from 'hooks';

import Filters from '../filters/Filters';

import { FieldInput, Header } from './boardHead.styled';

const BoardHead = () => {
  const { setActiveBoard } = useBoardContext();

  const { activeBoard, activeBoardId, allBoards, updateExistingBoard } =
    useBoardsCollector();
  const [editingBoard, setEditingBoard] = useState(
    allBoards.find(board => board.id === activeBoardId)
  );
  const [title, setTitle] = useState(editingBoard?.title);

  useEffect(() => {
    if (activeBoardId) {
      const updatedBoard = allBoards?.find(board => board.id === activeBoardId);
      setEditingBoard(updatedBoard);
    }
  }, [activeBoardId, allBoards]);

  useEffect(() => {
    if (editingBoard) {
      setTitle(editingBoard?.title);
    }
  }, [editingBoard]);

  const handleTitle = useCallback(e => {
    setTitle(e.currentTarget.value);
  }, []);

  const handleBoardChange = async () => {
    const { id, user, ...rest } = editingBoard;

    updateExistingBoard({
      boardId: id,
      updatedData: { ...rest, title: title },
    });
    await setActiveBoard(editingBoard?.id);
    if (title) {
      encodeTitleBoardInUrl(title);
    }
  };

  const decodedTitle = decodeURIComponent(editingBoard?.id);

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
            onBlur={handleBoardChange}
            fullWidth={true}
            inputProps={{
              style: { border: 'none', outline: 'none', animation: 'none' },
            }}
          />
        )}
        <Filters />
      </Header>
    </>
  );
};

export default BoardHead;

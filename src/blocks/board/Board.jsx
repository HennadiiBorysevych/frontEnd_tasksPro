import React from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { processDndResult, StrictModeDroppable } from 'helpers';
import { useBoards, useColumns, useModal } from 'hooks';

import { BoardHead, CardColumn, ColumnPopUp } from 'components';
import { ButtonPlus, CustomScrollBar, Modal } from 'ui';

import {
  ButtonAddColumn,
  ColumnsContainer,
  ContainerWrapper,
} from './board.styled';

const Board = () => {
  const { activeBoardId } = useBoards();
  const { isModal, onBackdropClick, toggleModal } = useModal();
  const { columnsAndTasks } = useColumns();
  const dispatch = useDispatch();

  const onDragEnd = result => {
    const resultProcessed = processDndResult(result, columnsAndTasks);
    if (resultProcessed) {
      const { process, arg } = resultProcessed;
      dispatch(process(arg));
    }
  };

  return (
    <>
      <BoardHead />
      <CustomScrollBar height="100% - 68px">
        <ContainerWrapper>
          <DragDropContext onDragEnd={onDragEnd}>
            <StrictModeDroppable
              droppableId="all-columns"
              direction="horizontal"
              type="column"
            >
              {provided => (
                <ColumnsContainer
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {columnsAndTasks
                    .sort((a, b) => a.order - b.order) // Sort columns by order
                    .map((column, index) => (
                      <Draggable
                        key={column.id}
                        draggableId={column.id}
                        index={index}
                      >
                        {provided => (
                          <CardColumn provided={provided} column={column} />
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </ColumnsContainer>
              )}
            </StrictModeDroppable>
          </DragDropContext>
          <div>
            <ButtonAddColumn
              type="button"
              onClick={toggleModal}
              id="add-column-button"
            >
              <ButtonPlus variant="addColumn" />
              Add another column
            </ButtonAddColumn>
          </div>
        </ContainerWrapper>
      </CustomScrollBar>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <ColumnPopUp
            boardId={activeBoardId}
            columnIndex={columnsAndTasks.length}
            handleModalClose={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

export default Board;
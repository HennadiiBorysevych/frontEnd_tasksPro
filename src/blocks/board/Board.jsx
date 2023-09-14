import React from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { processDndResult, StrictModeDroppable } from 'helpers';
import { useBoardsCollector, useColumnsCollector, useModal } from 'hooks';

import { BoardHead, CardColumn, ColumnPopUp } from 'components';
import { ButtonPlus, CustomScrollBar, Modal } from 'ui';

import {
  ButtonAddColumn,
  ColumnsContainer,
  ContainerWrapper,
} from './board.styled';

const Board = () => {
  const { activeBoardId } = useBoardsCollector();
  const { isModal, onBackdropClick, toggleModal } = useModal();
  const { allColumns, columnsAndTasks } = useColumnsCollector();
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
      <CustomScrollBar variant="board">
        <ContainerWrapper>
          <DragDropContext onDragEnd={onDragEnd}>
            <StrictModeDroppable
              droppableId="all-columns"
              direction="horizontal"
              type="column"
            >
              {provided => (
                <ColumnsContainer
                  id="all-columns"
                  columns={allColumns}
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
                          <CardColumn
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            provided={provided}
                            column={column}
                          />
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

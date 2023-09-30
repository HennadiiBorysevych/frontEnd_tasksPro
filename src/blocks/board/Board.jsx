import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { processDndResult } from 'helpers';
import { useBoardsCollector, useColumnsCollector, useModal } from 'hooks';

import { BoardHead, CardColumn, ColumnPopUp, SkeletonLoader } from 'components';
import { ButtonPlus, CustomScrollBar, Modal, Typography } from 'ui';

import {
  ButtonAddColumn,
  ColumnsContainer,
  ContainerWrapper,
} from './board.styled';

const Board = () => {
  const { activeBoardId } = useBoardsCollector();
  const { isModal, onBackdropClick, toggleModal } = useModal();
  const { columnLoading, allColumns, columnsAndTasks } = useColumnsCollector();
  const dispatch = useDispatch();

  const onDragEnd = async result => {
    const resultProcessed = processDndResult(result, columnsAndTasks);
    if (resultProcessed) {
      const { process, arg } = resultProcessed;
      await dispatch(process(arg));
    }
  };

  return (
    <>
      <BoardHead />
      <CustomScrollBar variantScroll="board">
        <ContainerWrapper>
          {columnLoading ? (
            <SkeletonLoader page="/column" />
          ) : (
            <>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable
                  droppableId="all-columns"
                  direction="horizontal"
                  type="column"
                >
                  {provided => (
                    <ColumnsContainer
                      columns={allColumns}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {!!columnsAndTasks &&
                        columnsAndTasks
                          .sort((a, b) => a.order - b.order) // Sort columns by order
                          .map((column, index) => (
                            <Draggable
                              key={column.id}
                              draggableId={column.id}
                              index={index}
                            >
                              {provided => (
                                <CardColumn
                                  provided={provided}
                                  column={column}
                                />
                              )}
                            </Draggable>
                          ))}
                      {provided.placeholder}
                    </ColumnsContainer>
                  )}
                </Droppable>
              </DragDropContext>
              <div>
                <ButtonAddColumn
                  type="button"
                  onClick={toggleModal}
                  id="add-column-button"
                >
                  <ButtonPlus variantIcon="addColumn" />
                  <Typography variant="buttonText">
                    Add another column
                  </Typography>
                </ButtonAddColumn>
              </div>
            </>
          )}
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

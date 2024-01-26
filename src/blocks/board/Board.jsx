import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useBoardsRedux, useColumnsRedux } from 'redux/services';

import { useDragEnd, useModal } from 'hooks';

import { BoardHead, CardColumn, ColumnPopUp, SkeletonLoader } from 'components';
import { ButtonPlus, CustomScrollBar, Modal, Typography } from 'ui';

import * as styles from './board.styled';

const Board = () => {
  const { onDragEnd } = useDragEnd();
  const { isModal, onBackdropClick, toggleModal } = useModal();
  const { activeBoardId } = useBoardsRedux();
  const { columnLoading, allColumns, columnsAndTasks } = useColumnsRedux();

  return (
    <>
      <BoardHead />
      <CustomScrollBar variantScroll="board">
        <styles.ContainerWrapper>
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
                    <styles.ColumnsContainer
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
                    </styles.ColumnsContainer>
                  )}
                </Droppable>
              </DragDropContext>
              <div>
                <styles.ButtonAddColumn
                  type="button"
                  onClick={toggleModal}
                  id="add-column-button"
                >
                  <ButtonPlus variantIcon="addColumn" />
                  <Typography variant="buttonText">
                    Add another column
                  </Typography>
                </styles.ButtonAddColumn>
              </div>
            </>
          )}
        </styles.ContainerWrapper>
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

import React from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { processDndResult, StrictModeDroppable } from 'helpers';
import { useBoards, useColumns, useModal } from 'hooks';

import {
  BoardHead,
  CardColumn,
  ColumnPopUp,
  CustomScrollbar,
  Modal,
  SvgIcon,
} from 'components';

import {
  ButtonAddColumn,
  ColumnsContainer,
  ContainerWrapper,
  SpanStyled,
} from './styles/boardStyles.styled';

const Board = () => {
  const { activeBoardId } = useBoards();
  const { isModal, onBackdropClick, toggleModal } = useModal();
  const { columnsAndTasks } = useColumns();
  const dispatch = useDispatch();

  const scrollbarStyles = {
    '.os-scrollbar-handle': {
      backgroundColor: '#bedbd0',
    },
  };
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
      <CustomScrollbar height="100% - 68px" scrollbarStyles={scrollbarStyles}>
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
            <ButtonAddColumn type="button" onClick={toggleModal}>
              <SpanStyled>
                <SvgIcon svgName="icon-plus" variant="buttonCard" size={14} />
              </SpanStyled>
              Add another column
            </ButtonAddColumn>
          </div>
        </ContainerWrapper>
      </CustomScrollbar>
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

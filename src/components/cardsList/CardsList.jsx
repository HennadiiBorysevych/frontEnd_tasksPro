import React from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { processDndResult } from 'helpers/dnd/processDndResult';
import { StrictModeDroppable } from 'helpers/dnd/strictModeDroppable';
import { selectActiveBoardId } from 'redux/boards/boardSelectors';
import { columnsSelectors } from 'redux/columns';

import { AddColumnBtn } from 'components';

import CardsColumn from '../cardsColumn/CardsColumn';
import CustomScrollBar from '../customScrollBar/CustomScrollBar';

import { Column, ColumnsContainer, ContainerWrapper } from './CardsList.styled';

const CardsList = () => {
  const dispatch = useDispatch();
  const activeBoardId = useSelector(selectActiveBoardId);
  const columnsAndTasks = useSelector(columnsSelectors.selectColumnsAndTasks);

  const onDragEnd = result => {
    const resultProcessed = processDndResult(result, columnsAndTasks);
    if (resultProcessed) {
      const { process, arg } = resultProcessed;
      dispatch(process(arg));
    }
  };

  return (
    <>
      <CustomScrollBar height="100% - 60px">
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
                          <CardsColumn provided={provided} column={column} />
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </ColumnsContainer>
              )}
            </StrictModeDroppable>
          </DragDropContext>
          <Column>
            <AddColumnBtn
              boardId={activeBoardId}
              columnIndex={columnsAndTasks.length}
            />
          </Column>
        </ContainerWrapper>
      </CustomScrollBar>
    </>
  );
};
export default CardsList;

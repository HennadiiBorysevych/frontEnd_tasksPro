import React from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrdersFromIndex } from 'helpers';
import { StrictModeDroppable } from 'helpers/dnd/strictModeDroppable';
import { selectActiveBoardId } from 'redux/boards/boardSelectors';
import { columnsOperations, columnsSelectors } from 'redux/columns';
import { moveTaskToColumn } from 'redux/tasks/cardOperations';
import { moveTask } from 'redux/tasks/cardOperations';

import { AddColumnBtn } from 'components';

import CardsColumn from '../cardsColumn/CardsColumn';
import CustomScrollBar from '../customScrollBar/CustomScrollBar';

import { Column, ColumnsContainer, ContainerWrapper } from './CardsList.styled';

const CardsList = () => {
  const dispatch = useDispatch();
  const activeBoardId = useSelector(selectActiveBoardId);
  const columnsAndTasks = useSelector(columnsSelectors.selectColumnsAndTasks);

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    if (result.type === 'column') {
      // whole column moving
      const dataArray = Array.from(columnsAndTasks);
      const idTask = result.draggableId;
      const destinationIndex = result.destination.index;
      const { updatingDataFull, updatingDataStripped } = updateOrdersFromIndex({
        idTask,
        destinationIndex,
        dataArray,
      });
      dispatch(
        columnsOperations.moveColumn({ updatingDataFull, updatingDataStripped })
      );
    } else {
      const dataArray = Array.from(columnsAndTasks);
      const { source, destination } = result;
      const columnId = source.droppableId;
      const idColumnNew = destination.droppableId;
      const isSameColumn = columnId === idColumnNew;

      if (!isSameColumn) {
        // task to another column moving
        const idTask = result.draggableId;
        const destinationIndex = result.destination.index;
        const sourceColumnItems = dataArray.find(
          col => col.id === columnId
        ).items;
        const indexToMove = sourceColumnItems.findIndex(
          item => item.id === idTask
        );
        const taskToMove = sourceColumnItems.splice(indexToMove, 1)[0];
        const destinationColumnItems = dataArray.find(
          col => col.id === idColumnNew
        ).items;
        destinationColumnItems.push(taskToMove);
        const dataOld = sourceColumnItems.map(({ id, order }) => ({
          id,
          order,
        }));

        const { updatingDataStripped: dataNew } = updateOrdersFromIndex({
          idTask,
          destinationIndex,
          dataArray: destinationColumnItems,
        });
        dispatch(moveTaskToColumn({ idTask, idColumnNew, dataOld, dataNew }));
      } else {
        // row moving
        let column = columnsAndTasks.find(col => col.id === columnId);
        const dataArray = Array.from(column.items);
        const idTask = result.draggableId;
        const destinationIndex = destination.index;

        const { updatingDataFull, updatingDataStripped } =
          updateOrdersFromIndex({
            idTask,
            destinationIndex,
            dataArray,
          });

        dispatch(moveTask({ updatingDataFull, updatingDataStripped }));
      }
    }
  };

  return (
    <>
      <CustomScrollBar height="500px">
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

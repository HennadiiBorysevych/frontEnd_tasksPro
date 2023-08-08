import React from 'react';
import { useSelector } from 'react-redux';

import columnsSelectors from 'redux/columns/selectors';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

import { CardItem, PrimaryButton } from 'components';
import {
  ContainerWrapper,
  ColumnsContainer,
  Column,
  ColumnHeading,
  ItemsContainer,
} from './CardsList.styled';

// import { updateOrderField } from 'helpers/updateOrderFieldById';

const CardsList = () => {
  const columnsAndTasks = useSelector(columnsSelectors.selectColumnsAndTasks);

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    console.log('onDragEnd..');
    if (result.type === 'column') {
      console.log('column moving');
      // const dataArray = Array.from(columnsAndTasks);
      // const sourceId = result.draggableId;

      // const destinationIndex = result.destination.index;

      // const changedColumns = updateOrderField({
      //   sourceId,
      //   destinationIndex,
      //   dataArray,
      // });
      // setColumnsAndTasks(changedColumns);
    } else {
      const { source, destination } = result;
      const columnId = source.droppableId;
      const targetColumnId = destination.droppableId;
      const isSameColumn = columnId === targetColumnId;

      if (!isSameColumn) {
        console.log('column+row moving');
        const sourceColumn = columnsAndTasks.find(col => col.id === columnId);
        const destinationColumn = columnsAndTasks.find(
          col => col.id === targetColumnId
        );
        console.log(
          'sourceColumn=, destinationColumn= ',
          sourceColumn,
          destinationColumn
        );
        console.log('result= ', result);
        const sourceItems = Array.from(sourceColumn.items);
        const destinationItems = Array.from(destinationColumn.items);
        const [movedItem] = sourceItems.splice(source.index, 1);

        destinationItems.splice(destination.index, 0, movedItem);

        // setColumnsAndTasks(prevColumns =>
        //   prevColumns.map(col =>
        //     col.id === columnId // this to change source column array  (remove from ..)
        //       ? { ...col, items: sourceItems }
        //       : col.id === targetColumnId // this to change target column array  (add to ..)
        //       ? { ...col, items: destinationItems }
        //       : col
        //   )
        // );
      } else {
        // Logic for moving items within the same column
        console.log('row moving');
        // const column = columnsAndTasks.find(col => col.id === columnId);
        // const dataArray = Array.from(column.items);
        // const sourceId = dataArray[source.index].id;
        // const destinationIndex = destination.index;
        // const changedItems = updateOrderField({
        //   sourceId,
        //   destinationIndex,
        //   dataArray,
        // });
        // setColumnsAndTasks(prevColumns =>
        //   prevColumns.map(col =>
        //     col.id === columnId ? { ...col, items: changedItems } : col
        //   )
        // );
      }
    }
  };
  return (
    <ContainerWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
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
                      <Column
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <ColumnHeading {...provided.dragHandleProps}>
                          {column.title}
                        </ColumnHeading>
                        <Droppable
                          droppableId={column.id}
                          type="item"
                          isCombineEnabled={true}
                        >
                          {provided => (
                            <ItemsContainer
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                            >
                              {column.items
                                .sort((a, b) => a.order - b.order) // Sort items by order
                                .map((item, index) => (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {provided => (
                                      <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                      >
                                        <CardItem item={{ ...item }} />
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                              {provided.placeholder}
                            </ItemsContainer>
                          )}
                        </Droppable>
                        <PrimaryButton
                          hasIcon={false}
                          type="button"
                          height={56}
                        >
                          Add another card
                        </PrimaryButton>
                      </Column>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </ColumnsContainer>
          )}
        </Droppable>
      </DragDropContext>
      <Column>
        <PrimaryButton hasIcon={false} type="button" width={334} height={56}>
          Add another column
        </PrimaryButton>
      </Column>
    </ContainerWrapper>
  );
};

export default CardsList;

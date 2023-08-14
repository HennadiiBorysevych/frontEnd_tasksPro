import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { StrictModeDroppable } from 'helpers/dnd/strictModeDroppable';
import { selectTheme } from 'redux/auth/authSelectors';
import { columnsOperations, columnsSelectors } from 'redux/columns';
import columnSelectors from 'redux/columns/columnSelectors';
import cardSelectors from 'redux/tasks/cardSelectors';
import { selectUserFilter } from 'redux/userFilterSlice';

import { AddCardBtn, CardItem, EditColumnBtn } from 'components';

import CustomScrollBar from '../customScrollBar/CustomScrollBar';
import ReactConfirmAlert from '../reactConfirmAlert/ReactConfirmAlert';

import {
  ButtonWrapper,
  Column,
  ColumnHeading,
  ColumnHeadingText,
  IconsContainer,
  ItemsContainer,
} from './CardsColumn.styled';

function CardsColumn({ provided, column }) {
  const dispatch = useDispatch();

  const columnsAndTasks = useSelector(columnsSelectors.selectColumnsAndTasks);
  const isColumnLoading = useSelector(columnSelectors.selectLoading);
  const isTasksLoading = useSelector(cardSelectors.selectLoading);
  const userFilter = useSelector(selectUserFilter);
  const selectedTheme = useSelector(selectTheme);

  const isLoading = isColumnLoading || isTasksLoading;
  return (
    <Column
      isLoading={isLoading}
      {...provided.draggableProps}
      ref={provided.innerRef}
    >
      <ColumnHeading isLoading={isLoading} {...provided.dragHandleProps}>
        <ColumnHeadingText>{column.title}</ColumnHeadingText>

        <IconsContainer>
          <EditColumnBtn column={column} />

          <ReactConfirmAlert
            selectedTheme={selectedTheme}
            onDeleteAction={() =>
              dispatch(columnsOperations.deleteColumn(column.id))
            }
            item="column and all content in it"
            owner="columns"
            ownerId={column.id}
          />
        </IconsContainer>
      </ColumnHeading>
      <StrictModeDroppable
        droppableId={column.id}
        type="item"
        isCombineEnabled={true}
      >
        {provided => (
          <CustomScrollBar>
            <ItemsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {column.items
                .filter(
                  ({ priority }) =>
                    priority.toLowerCase().includes(userFilter) ||
                    userFilter === 'showAll'
                )
                .sort((a, b) => a.order - b.order) // Sort items by order
                .map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
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
          </CustomScrollBar>
        )}
      </StrictModeDroppable>
      <ButtonWrapper>
        <AddCardBtn columnId={column.id} cardIndex={columnsAndTasks.length} />
      </ButtonWrapper>
    </Column>
  );
}

export default CardsColumn;

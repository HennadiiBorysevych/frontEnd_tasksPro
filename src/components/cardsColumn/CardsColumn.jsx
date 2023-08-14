import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch, useSelector } from 'react-redux';
import { StrictModeDroppable } from 'helpers/dnd/strictModeDroppable';
import { selectTheme } from 'redux/auth/authSelectors';
import { columnsOperations, columnsSelectors } from 'redux/columns';
import columnSelectors from 'redux/columns/columnSelectors';
import cardSelectors from 'redux/tasks/cardSelectors';
import { selectUserFilter } from 'redux/userFilterSlice';

import { AddCardBtn, CardItem, EditColumnBtn, IconButton } from 'components';
import Typography from 'components/typography/Typography';

import CustomScrollBar from '../customScrollBar/CustomScrollBar';

import 'react-confirm-alert/src/react-confirm-alert.css';
import '../reactConfirmAlert/ReactConfirmAlert.styled.css';
import {
  ButtonWrapper,
  Column,
  ColumnHeading,
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
        <Typography variant="columnTitle">{column.title}</Typography>

        <IconsContainer>
          <EditColumnBtn column={column} />

          <IconButton
            svgName="icon-trash"
            onClick={() => {
              confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div
                      className={`react-confirm ${
                        selectedTheme === 'Dark'
                          ? 'react-confirm-alert-dark'
                          : 'react-confirm-alert-light'
                      }`}
                    >
                      <h1>Confirm Deletion</h1>
                      <p>Are you sure you want to delete this task?</p>
                      <div className="confirm-buttons">
                        <button onClick={onClose} className="green">
                          Cancel
                        </button>

                        <button
                          className="red"
                          onClick={() => {
                            onClose();
                            dispatch(columnsOperations.deleteColumn(column.id));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                },
              });
            }}
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

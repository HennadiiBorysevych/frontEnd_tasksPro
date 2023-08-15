import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { StrictModeDroppable } from 'helpers/dnd/strictModeDroppable';
import { useModal } from 'hooks';
import { selectTheme } from 'redux/auth/authSelectors';
import { columnsOperations, columnsSelectors } from 'redux/columns';
import columnSelectors from 'redux/columns/columnSelectors';
import cardSelectors from 'redux/tasks/cardSelectors';
import { selectUserFilter } from 'redux/userFilterSlice';

import { AddCardBtn, CardItem, ColumnPopUp, Modal, SvgIcon } from 'components';
import Typography from 'components/typography/Typography';

import CustomScrollBar from '../customScrollBar/CustomScrollBar';
import ReactConfirmAlert from '../reactConfirmAlert/ReactConfirmAlert';

import {
  Column,
  ColumnHeading,
  IconsContainer,
  ItemsContainer,
} from './CardsColumn.styled';

function CardsColumn({ provided, column }) {
  const dispatch = useDispatch();
  const { isModal, onBackdropClick, toggleModal } = useModal();
  const columnsAndTasks = useSelector(columnsSelectors.selectColumnsAndTasks);
  const isColumnLoading = useSelector(columnSelectors.selectLoading);
  const isTasksLoading = useSelector(cardSelectors.selectLoading);
  const userFilter = useSelector(selectUserFilter);
  const selectedTheme = useSelector(selectTheme);

  const [boardListHeight, setBoardListHeight] = useState(() => {
    return window.innerHeight - elementsTotalSize(window.innerWidth);
  });

  function elementsTotalSize(width) {
    if (width <= 767) {
      //mobile
      return 353;
    } else if (width >= 768 && width <= 1439) {
      // tablet
      return 395;
    } else {
      // desktop
      return 298;
    }
  }

  useEffect(() => {
    const updateWindowHeight = () => {
      setBoardListHeight(
        window.innerHeight - elementsTotalSize(window.innerWidth)
      );
    };
    window.addEventListener('resize', updateWindowHeight);
    return () => {
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);

  const isLoading = isColumnLoading || isTasksLoading;

  return (
    <>
      <Column
        isLoading={isLoading}
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <ColumnHeading isLoading={isLoading} {...provided.dragHandleProps}>
          <Typography variant="columnTitle">{column.title}</Typography>

          <IconsContainer>
            <button type="button" onClick={toggleModal}>
              <SvgIcon
                svgName="icon-pencil"
                size={16}
                variant="popUp"
                isActive={false}
              />
            </button>

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
            <CustomScrollBar maxHeight={boardListHeight}>
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
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {provided => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <CardItem item={{ ...item }} />
                        </li>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </ItemsContainer>
            </CustomScrollBar>
          )}
        </StrictModeDroppable>
        <AddCardBtn columnId={column.id} cardIndex={columnsAndTasks.length} />
      </Column>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <ColumnPopUp column={column} handleModalClose={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default CardsColumn;

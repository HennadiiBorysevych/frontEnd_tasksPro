import React from 'react';
import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrdersFromIndex } from 'helpers';
import { useModal } from 'hooks';
import { selectActiveBoardId } from 'redux/boards/boardSelectors';
import { columnsSelectors } from 'redux/columns';
import columnOperations from 'redux/columns/columnOperations';
import columnSelectors from 'redux/columns/columnSelectors';
import { moveTaskToColumn } from 'redux/tasks/cardOperations';
import { moveTask } from 'redux/tasks/cardOperations';
import cardSelectors from 'redux/tasks/cardSelectors';
import { selectUserFilter } from 'redux/userFilterSlice';

import {
  AddCardBtn,
  ButtonPlus,
  CardItem,
  ColumnPopUp,
  Modal,
  SvgIcon,
} from 'components';

import CustomScrollBar from '../customScrollBar/CustomScrollBar';

import {
  ButtonWrapper,
  Column,
  ColumnHeading,
  ColumnHeadingText,
  ColumnsContainer,
  ContainerWrapper,
  IconButton,
  IconsContainer,
  ItemsContainer,
} from './CardsList.styled';

export const StrictModeDroppable = ({ children, ...props }) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};

const CardsList = () => {
  const dispatch = useDispatch();
  const activeBoardId = useSelector(selectActiveBoardId);
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const columnsAndTasks = useSelector(columnsSelectors.selectColumnsAndTasks);
  const isColumnLoading = useSelector(columnSelectors.selectLoading);
  const isTasksLoading = useSelector(cardSelectors.selectLoading);
  const userFilter = useSelector(selectUserFilter);
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
        columnOperations.moveColumn({ updatingDataFull, updatingDataStripped })
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
        const idTask = dataArray[source.index].id;
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

  const isLoading = isColumnLoading || isTasksLoading;

  const onDeleteColumn = id => {
    dispatch(columnOperations.deleteColumn(id));
  };

  return (
    <>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <ColumnPopUp
            boardId={activeBoardId}
            columnIndex={columnsAndTasks.length}
            handleModalClose={toggleModal}
          />
        </Modal>
      )}
      {/* <CustomScrollBar> */}
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
                        <Column
                          isLoading={isLoading}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <ColumnHeading
                            isLoading={isLoading}
                            {...provided.dragHandleProps}
                          >
                            <ColumnHeadingText>
                              {column.title}
                            </ColumnHeadingText>

                            <IconsContainer>
                              <IconButton type="button" onClick={toggleModal}>
                                <SvgIcon
                                  svgName="icon-pencil"
                                  size={16}
                                  stroke="rgba(255, 255, 255, 0.5)"
                                />
                              </IconButton>
                              <IconButton
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    columnOperations.deleteColumn(column.id)
                                  )
                                }
                              >
                                <SvgIcon
                                  svgName="icon-trash"
                                  size={16}
                                  stroke="#FFFFFF80"
                                />
                              </IconButton>
                            </IconsContainer>
                          </ColumnHeading>
                          <StrictModeDroppable
                            droppableId={column.id}
                            type="item"
                            isCombineEnabled={true}
                          >
                            {provided => (
                              // <CustomScrollBar>
                              <ItemsContainer
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                                {column.items
                                  .filter(({ priority }) =>
                                    priority.toLowerCase().includes(userFilter)
                                  )
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
                              // </CustomScrollBar>
                            )}
                          </StrictModeDroppable>
                          <ButtonWrapper>
                            <AddCardBtn
                              columnId={column.id}
                              cardIndex={columnsAndTasks.length}
                            />
                          </ButtonWrapper>
                        </Column>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </ColumnsContainer>
            )}
          </StrictModeDroppable>
        </DragDropContext>
        <Column>
          <button
            type="button"
            onClick={toggleModal}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              width: '334px',
              justifyContent: 'center',
              padding: '14px 0',
              borderRadius: '8px',
              backgroundColor: '#121212',
            }}
          >
            <ButtonPlus
              stroke="#121212"
              width={28}
              height={28}
              backgroundColor="#ffffff"
            />
            Add another column
          </button>
        </Column>
      </ContainerWrapper>
      {/* </CustomScrollBar> */}
    </>
  );
};

export default CardsList;

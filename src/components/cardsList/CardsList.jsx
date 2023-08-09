import React from 'react';
import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrdersFromIndex } from 'helpers/updateOrdersFromIndex';
import { useModal } from 'hooks';
import { moveColumn } from 'redux/columns/operations';
import { moveTaskToColumn } from 'redux/columns/operations';
import columnsSelectors from 'redux/columns/selectors';
import { selectLoading } from 'redux/columns/selectors';
import { moveTask } from 'redux/tasks/cardOperations';

import { Modal } from 'components';
import { ColumnPopUp } from 'components';
import { ButtonPlus } from 'components';
import { CardItem, PrimaryButton } from 'components';
import { SvgIcon } from 'components';

import CustomScrollBar from './CustomScrollBar';

import {
  Column,
  ColumnHeading,
  ColumnHeadingText,
  ColumnsContainer,
  ContainerWrapper,
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
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const columnsAndTasks = useSelector(columnsSelectors.selectColumnsAndTasks);
  const isColumnLoading = useSelector(selectLoading);
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    console.log('onDragEnd..');

    if (result.type === 'column') {
      console.log('column moving');
      const dataArray = Array.from(columnsAndTasks);
      const idTask = result.draggableId;
      const destinationIndex = result.destination.index;
      const { updatingDataFull, updatingDataStripped } = updateOrdersFromIndex({
        idTask,
        destinationIndex,
        dataArray,
      });
      dispatch(moveColumn({ updatingDataFull, updatingDataStripped }));
    } else {
      const dataArray = Array.from(columnsAndTasks);
      const { source, destination } = result;
      const columnId = source.droppableId;
      const idColumnNew = destination.droppableId;
      const isSameColumn = columnId === idColumnNew;

      if (!isSameColumn) {
        console.log('column+row moving');
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
        console.log('row moving');
        const column = columnsAndTasks.find(col => col.id === columnId);
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
  return (
    <>
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <ColumnPopUp onClose={toggleModal} />
        </Modal>
      )}
      <CustomScrollBar>
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
                            isLoading={isColumnLoading}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            <ColumnHeading
                              isLoading={isColumnLoading}
                              {...provided.dragHandleProps}
                            >
                              <ColumnHeadingText>
                                {column.title}
                              </ColumnHeadingText>

                              <IconsContainer>
                                <button type="button" onClick={toggleModal}>
                                  <SvgIcon
                                    svgName="icon-pencil"
                                    size={16}
                                    stroke="rgba(255, 255, 255, 0.5)"
                                  />
                                </button>
                                <SvgIcon
                                  svgName="icon-trash"
                                  size={16}
                                  stroke="#FFFFFF80"
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
                                </CustomScrollBar>
                              )}
                            </StrictModeDroppable>
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
            </StrictModeDroppable>
          </DragDropContext>
          <Column>
            <button type="button" onClick={toggleModal}>
              <ButtonPlus width={334} height={56} />
              Add another column
            </button>
          </Column>
        </ContainerWrapper>
      </CustomScrollBar>
    </>
  );
};

export default CardsList;

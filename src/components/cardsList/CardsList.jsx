import React from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { processDndResult } from 'helpers/dnd/processDndResult';
import { StrictModeDroppable } from 'helpers/dnd/strictModeDroppable';
import { useModal } from 'hooks';
import { selectActiveBoardId } from 'redux/boards/boardSelectors';
import { columnsSelectors } from 'redux/columns';

import { ColumnPopUp, Modal, SvgIcon } from 'components';

import CardsColumn from '../cardsColumn/CardsColumn';
import CustomScrollBar from '../customScrollBar/CustomScrollBar';

import {
  ButtonAddColumn,
  ColumnsContainer,
  ContainerWrapper,
  SpanStyled,
} from './CardsList.styled';

const CardsList = () => {
  const { isModal, onBackdropClick, toggleModal } = useModal();
  const dispatch = useDispatch();
  const activeBoardId = useSelector(selectActiveBoardId);
  const columnsAndTasks = useSelector(columnsSelectors.selectColumnsAndTasks);

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
      <CustomScrollBar height="100% - 68px" scrollbarStyles={scrollbarStyles}>
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
          <div>
            <ButtonAddColumn type="button" onClick={toggleModal}>
              <SpanStyled>
                <SvgIcon svgName="icon-plus" variant="buttonCard" size={14} />
              </SpanStyled>
              Add another column
            </ButtonAddColumn>
          </div>
        </ContainerWrapper>
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
export default CardsList;

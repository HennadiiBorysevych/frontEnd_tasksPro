import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useColumnsRedux, useFilterRedux } from 'redux/services';

import { useModal } from 'hooks';

import {
  ControlIcons,
  CustomScrollBar,
  Modal,
  PrimaryButton,
  Typography,
} from 'ui';

import CardItem from '../cardItem/CardItem';
import CardPopUp from '../cardPopUp/CardPopUp';
import ColumnPopUp from '../columnPopUp/ColumnPopUp';
import SkeletonLoader from '../skeleton/SkeletonLoader';

import CardColumnPropTypes from './propTypes';

import * as styles from './CardColumn.styled';

function CardsColumn({ provided, column }) {
  const { columnLoading, columnsAndTasks, removeColumn } = useColumnsRedux();
  const { userFilter } = useFilterRedux();
  const { isModal, onBackdropClick, toggleModal } = useModal();

  const [modalType, setModalType] = useState(null);

  const handleOpenModal = modalName => {
    setModalType(modalName);
    toggleModal();
  };

  return (
    <>
      {columnLoading ? (
        <SkeletonLoader page="/column" />
      ) : (
        <styles.Column
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <styles.ColumnHeading
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Typography variant="columnTitle">{column.title}</Typography>
            <ControlIcons
              onClick={() => handleOpenModal('editColumn')}
              ariaLabel="Edit column button"
              variantIcon="popUp"
              isActive={false}
              onDeleteAction={() => removeColumn(column.id)}
              item="column and all content in it"
              owner="columns"
              ownerId={column.id}
            />
          </styles.ColumnHeading>
          <Droppable droppableId={column.id} type="item">
            {provided => (
              <CustomScrollBar variantScroll="columns">
                <styles.ItemsContainer
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
                          <styles.DraggableItem
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <CardItem item={{ ...item }} />
                          </styles.DraggableItem>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </styles.ItemsContainer>
              </CustomScrollBar>
            )}
          </Droppable>
          <PrimaryButton
            hasIcon={true}
            type="button"
            svgName={'icon-plus'}
            variantIcon="primary"
            width="board"
            onClick={() => handleOpenModal('createCard')}
          >
            Add another card
          </PrimaryButton>
        </styles.Column>
      )}
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          {modalType === 'editColumn' ? (
            <ColumnPopUp column={column} handleModalClose={toggleModal} />
          ) : (
            <CardPopUp
              columnId={column.id}
              cardIndex={columnsAndTasks.length}
              handleModalClose={toggleModal}
            />
          )}
        </Modal>
      )}
    </>
  );
}

export default CardsColumn;

CardsColumn.propTypes = CardColumnPropTypes;

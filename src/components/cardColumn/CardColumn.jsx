import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectUserFilter } from 'redux/userFilterSlice';

import { useColumnsCollector, useModal } from 'hooks';

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

import {
  Column,
  ColumnHeading,
  DraggableItem,
  ItemsContainer,
} from './CardColumn.styled';

function CardsColumn({ provided, column }) {
  const { columnLoading, columnsAndTasks, removeColumn } =
    useColumnsCollector();
  const { isModal, onBackdropClick, toggleModal } = useModal();
  const userFilter = useSelector(selectUserFilter);

  const [modalType, setModalType] = useState(null);

  const handleEditColumn = () => {
    setModalType('editColumn');
    toggleModal();
  };

  const handleCreateCard = () => {
    setModalType('createCard');
    toggleModal();
  };

  return (
    <>
      {columnLoading ? (
        <SkeletonLoader page="/column" />
      ) : (
        <Column
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <ColumnHeading {...provided.dragHandleProps} ref={provided.innerRef}>
            <Typography variant="columnTitle">{column.title}</Typography>
            <ControlIcons
              onClick={handleEditColumn}
              ariaLabel="Edit column button"
              variantIcon="popUp"
              isActive={false}
              onDeleteAction={() => removeColumn(column.id)}
              item="column and all content in it"
              owner="columns"
              ownerId={column.id}
            />
          </ColumnHeading>
          <Droppable
            droppableId={column.id}
            type="item"
            // isCombineEnabled={true}
          >
            {provided => (
              <CustomScrollBar variantScroll="columns">
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
                          <DraggableItem
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <CardItem item={{ ...item }} />
                          </DraggableItem>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </ItemsContainer>
              </CustomScrollBar>
            )}
          </Droppable>
          <PrimaryButton
            hasIcon={true}
            type="button"
            svgName={'icon-plus'}
            variantIcon="primary"
            width="board"
            onClick={handleCreateCard}
          >
            Add another card
          </PrimaryButton>
        </Column>
      )}
      {isModal && modalType === 'editColumn' && (
        <Modal onBackdropClick={onBackdropClick}>
          <ColumnPopUp column={column} handleModalClose={toggleModal} />
        </Modal>
      )}
      {isModal && modalType === 'createCard' && (
        <Modal onBackdropClick={onBackdropClick}>
          <CardPopUp
            columnId={column.id}
            cardIndex={columnsAndTasks.length}
            handleModalClose={toggleModal}
          />
        </Modal>
      )}
    </>
  );
}

export default CardsColumn;

CardsColumn.propTypes = {
  column: PropTypes.shape({
    columnOwner: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.array,
    orderColumn: PropTypes.number,
    title: PropTypes.string.isRequired,
  }),
};

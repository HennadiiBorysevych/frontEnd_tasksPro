import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectUserFilter } from 'redux/userFilterSlice';

import { StrictModeDroppable } from 'helpers';
import {
  useAuthCollector,
  useCardsCollector,
  useColumnsCollector,
  useModal,
} from 'hooks';

import {
  CustomScrollBar,
  Modal,
  PrimaryButton,
  ReactConfirmAlert,
  SvgIcon,
  Typography,
} from 'ui';

import CardItem from '../cardItem/CardItem';
import CardPopUp from '../cardPopUp/CardPopUp';
import ColumnPopUp from '../columnPopUp/ColumnPopUp';

import {
  Column,
  ColumnHeading,
  DraggableItem,
  IconsContainer,
  ItemsContainer,
} from './CardColumn.styled';

function CardsColumn({ provided, column }) {
  const { theme } = useAuthCollector();
  const { columnLoading, columnsAndTasks, removeColumn } =
    useColumnsCollector();
  const { cardLoading } = useCardsCollector();
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

  const isLoading = columnLoading || cardLoading;

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
            <button
              type="button"
              onClick={handleEditColumn}
              aria-label="Edit column button"
            >
              <SvgIcon
                svgName="icon-pencil"
                size={16}
                variant="popUp"
                isActive={false}
              />
            </button>

            <ReactConfirmAlert
              selectedTheme={theme}
              onDeleteAction={() => removeColumn(column.id)}
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
            <CustomScrollBar variant="columns">
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
        </StrictModeDroppable>
        <PrimaryButton
          hasIcon={true}
          type="button"
          svgName={'icon-plus'}
          variant="primary"
          version="board"
          onClick={handleCreateCard}
        >
          Add another card
        </PrimaryButton>
      </Column>
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

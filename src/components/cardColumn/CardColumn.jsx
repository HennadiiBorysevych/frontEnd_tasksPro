import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectUserFilter } from 'redux/userFilterSlice';

import { StrictModeDroppable } from 'helpers';
import { useAuth, useCards, useColumns, useModal } from 'hooks';

import { AddCardBtn, CardItem, ColumnPopUp } from 'components';
import {
  CustomScrollBar,
  Modal,
  ReactConfirmAlert,
  SvgIcon,
  Typography,
} from 'ui';

import {
  Column,
  ColumnHeading,
  IconsContainer,
  ItemsContainer,
} from './CardColumn.styled';

function CardsColumn({ provided, column }) {
  const { theme } = useAuth();
  const { columnLoading, columnsAndTasks, removeColumn } = useColumns();
  const { cardLoading } = useCards();
  const { isModal, onBackdropClick, toggleModal } = useModal();
  const userFilter = useSelector(selectUserFilter);

  const [boardListHeight, setBoardListHeight] = useState(() => {
    return window.innerHeight - elementsTotalSize(window.innerWidth);
  });
  const [modalType, setModalType] = useState(null);
  function elementsTotalSize(width) {
    if (width <= 767) {
      //mobile
      return 343;
    } else if (width >= 768 && width <= 1439) {
      // tablet
      return 380;
    } else {
      // desktop
      return 282;
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

  const handleEditColumn = () => {
    setModalType('editColumn');
    toggleModal();
  };

  // const handleCreateCard = () => {
  //   setModalType('createCard');
  //   toggleModal();
  // };

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
        {/* <PrimaryButton
          hasIcon={true}
          type="button"
          svgName={'icon-plus'}
          variant="primary"
          onClick={handleCreateCard}
        >
          Add another card
        </PrimaryButton> */}
      </Column>
      {isModal && modalType === 'editColumn' && (
        <Modal onBackdropClick={onBackdropClick}>
          <ColumnPopUp column={column} handleModalClose={toggleModal} />
        </Modal>
      )}
      {/* {isModal && modalType === 'createCard' && (
        <Modal onBackdropClick={onBackdropClick}>
          <CardPopUp
            columnId={column.id}
            cardIndex={columnsAndTasks.length}
            handleModalClose={toggleModal}
          />
        </Modal>
      )} */}
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

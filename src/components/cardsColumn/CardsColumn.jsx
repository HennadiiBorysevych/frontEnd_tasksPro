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

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const isLoading = isColumnLoading || isTasksLoading;

  const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowHeight);

    return () => {
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);

  const wdth = window.innerWidth;
  let magicBullet = 0;
  let viewPortTop; // динамическое значение верхней границы экрана в пикселях.
  let viewPortBottom; // динамическое значение высоты до нижней границы экрана
  if (wdth <= 767) {
    //Проверка на мобилковость экрана
    viewPortTop = 204; //Фиксированное значение до верхней границы при мобильном брейкпоинте
    viewPortBottom = 24 + 12 + 24; //Сумма значений: 12 - высота горизонтального скрола; 24 и 24 - марджины
  } else if (wdth >= 768 && wdth <= 1439) {
    //Проверка на планшетность экрана
    viewPortTop = 218; //Фиксированное значение до верхней границы при планшетном брейкпоинте
    viewPortBottom = 32 + 12 + 52; //Сумма значений: 12 - высота горизонтального скрола; 32 и 52 - марджины
    magicBullet = 364;
  } else {
    //Десктопный экран
    viewPortTop = 194; //Фиксированное значение до верхней границы при десктопном брейкпоинте
    // viewPortTop = 186; //Фиксированное значение до верхней границы при десктопном брейкпоинте
    viewPortBottom = 116; //Сумма значений: 12 - высота горизонтального скрола; 8 и 16 - марджины
    magicBullet = 307;
    // viewPortBottom = 8 + 12 + 16; //Сумма значений: 12 - высота горизонтального скрола; 8 и 16 - марджины
  }

  // const boardListHeight = windowHeight - (viewPortTop + viewPortBottom); //Итоговое динамическое значение max-height для списка досок
  const boardListHeight = windowHeight - magicBullet;

  // Высота списка досок теперь будет всегда подстраиваться под максимальную высоту экрана

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

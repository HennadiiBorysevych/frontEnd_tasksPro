import React, { useEffect, useState } from 'react';
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

import CustomScrollBar from '../customScrollBar/CustomScrollBar';

import 'react-confirm-alert/src/react-confirm-alert.css';
import '../reactConfirmAlert/ReactConfirmAlert.styled.css';
import {
  ButtonWrapper,
  Column,
  ColumnHeading,
  ColumnHeadingText,
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

  const [windowHeight, setWindowHeight] = useState(window.innerHeight); //Из-за того, что windowHeight нельзя прокинуть пропсом из sharedLayout, приходится вызывать топорно вручную

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

  const wdth = window.innerWidth; // КОСТЫЛЬ

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
  } else {
    //Десктопный экран
    viewPortTop = 186; //Фиксированное значение до верхней границы при десктопном брейкпоинте
    viewPortBottom = 8 + 12 + 16; //Сумма значений: 12 - высота горизонтального скрола; 8 и 16 - марджины
  } //ОДИН ОГРОМНЫЙ КОСТЫЛЬ ДЛЯ ПРОВЕРКИ БРЕЙКПОИНТА И УСТАНОВКИ ЗНАЧЕНИЙ viewPortTop и viewPortBottom

  const boardListHeight = windowHeight - (viewPortTop + viewPortBottom); //Итоговое динамическое значение max-height для списка досок
  // Высота списка досок теперь будет всегда подстраиваться под максимальную высоту экрана

  return (
    <Column
      isLoading={isLoading}
      {...provided.draggableProps}
      ref={provided.innerRef}
    >
      <ColumnHeading isLoading={isLoading} {...provided.dragHandleProps}>
        <ColumnHeadingText>{column.title}</ColumnHeadingText>

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
                      <p>Are you sure you want to delete this column?</p>
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

import React from 'react';
import { useDispatch } from 'react-redux';
import { clearEncodedTitleInUrl, encodedTitleInUrl } from 'helpers';
import { useBoardContext, useBoards } from 'hooks';
import { setUserFilter } from 'redux/userFilterSlice';

import { CustomScrollbar, SideBarItem } from 'components';

import { BoardList } from './sideBarBoardsList.styled';

const SideBarBoardsList = ({ windowHeight }) => {
  const { activeBoardId, setActiveBoard } = useBoardContext();
  const { allBoards, getAllBoards, getOneBoard, removeBoard } = useBoards();

  const dispatch = useDispatch();

  const handleActiveBoard = async boardId => {
    try {
      getOneBoard(boardId);
      await setActiveBoard(boardId);

      const activatedBoard = await allBoards.find(
        board => board.id === boardId
      );

      const { title } = activatedBoard;

      if (title) {
        encodedTitleInUrl(title);
      }
      const filterBoard = localStorage.getItem(boardId);
      if (filterBoard) {
        dispatch(setUserFilter(filterBoard));
      }
    } catch (error) {
      console.error('Error getting board data', error);
    }
  };

  const handleDeleteBoard = async id => {
    try {
      localStorage.removeItem(id);
      removeBoard(id);

      const firstBoard = allBoards[0];

      if (!firstBoard) {
        clearEncodedTitleInUrl();
        return;
      } else {
        getAllBoards();
        setActiveBoard(firstBoard?.id);

        const { title } = firstBoard;
        encodedTitleInUrl(title);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const wdth = window.innerWidth;
  let checkWidth; // фиксированное значение высоты компонента support
  if (wdth >= 768) {
    checkWidth = 272;
  } else {
    checkWidth = 238;
  }

  const viewPortTop = 252; //Значение от верхней доски до верхней границы экрана в пикселях. ОДИНАВОКОВО ДЛЯ ВСЕХ БРЕЙКПОИНТОВ
  const viewPortBottom = 40 + checkWidth + 80; //Динамическое значение в зависимости от брейкпоинта: телефон-планшет/ПК. Состоит из, по порядку: 40px - паддинг; - динамическое значение; 80px - расстояние до нижней границы экрана, ОДИНАКОВО ДЛЯ ВСЕХ БРЕЙКПОИНТОВ
  const boardListHeight = windowHeight - (viewPortTop + viewPortBottom); //Итоговое динамическое значение max-height для списка досок
  // Высота списка досок теперь будет всегда подстраиваться под максимальную высоту экрана

  return (
    <CustomScrollbar width="100%" maxHeight={boardListHeight} overflow="auto">
      <BoardList>
        {allBoards.map(({ id, icon, title }) => (
          <SideBarItem
            key={id}
            id={id}
            iconName={icon}
            title={title}
            active={activeBoardId === id}
            onHandleActiveBoard={() => handleActiveBoard(id)}
            onDeleteClick={() => handleDeleteBoard(id)}
          />
        ))}
      </BoardList>
    </CustomScrollbar>
  );
};

export default SideBarBoardsList;

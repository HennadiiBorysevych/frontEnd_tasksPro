import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useBoardContext } from 'hooks';
import {
  deleteBoard,
  fetchBoards,
  getBoard,
} from 'redux/boards/boardOperations';
import { selectAllBoards } from 'redux/boards/boardSelectors';

import { CustomScrollbar, SideBarItem } from 'components';

import { BoardList } from './sideBarBoardsList.styled';

const SideBarBoardsList = ({ windowHeight }) => {
  const { activeBoardId, setActiveBoard } = useBoardContext();
  const boards = useSelector(selectAllBoards);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleActiveBoard = async boardId => {
    try {
      await dispatch(getBoard(boardId));
      await setActiveBoard(boardId);
      const activatedBoard = await boards.find(board => board.id === boardId);

      if (activatedBoard) {
        const encodedTitle = encodeURIComponent(activatedBoard.title);
        navigate(`${encodedTitle}`);
      }
    } catch (error) {
      console.error('Error getting board data', error);
    }
  };

  const handleDeleteBoard = async id => {
    try {
      await dispatch(deleteBoard(id));
      await dispatch(fetchBoards());

      const firstBoard = boards[0];
      if (firstBoard) {
        setActiveBoard(firstBoard.id);
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
        {boards.map(({ id, icon, title }) => (
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

import { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectActiveBoardId,
  selectAllBoards,
} from 'redux/boards/boardSelectors';

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const activeBoardId = useSelector(selectActiveBoardId);
  const initialBoards = useSelector(selectAllBoards);
  const [activeBoard, setActiveBoard] = useState(activeBoardId);
  const [boards, setBoards] = useState(initialBoards);
  console.log(boards);

  return (
    <BoardContext.Provider
      value={{
        activeBoardId,
        boards,
        activeBoard,
        setActiveBoard,
        setBoards,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

const useBoardContext = () => useContext(BoardContext);

export { BoardProvider as default, useBoardContext };

import { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveBoardId } from 'redux/boards/boardSelectors';

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const activeBoardId = useSelector(selectActiveBoardId);
  const [activeBoard, setActiveBoard] = useState(activeBoardId);

  return (
    <BoardContext.Provider
      value={{
        activeBoardId,
        activeBoard,
        setActiveBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

const useBoardContext = () => useContext(BoardContext);

export { BoardProvider as default, useBoardContext };

import { useCallback, useState } from 'react';

import { columnModel } from 'constants';

import useColumnsCollector from './useColumnsCollector';

const useColumn = (currentColumn, columnIndex, boardId, closeModal) => {
  const { addNewColumn, updateExistingColumn } = useColumnsCollector();
  const initialColumn = currentColumn ? currentColumn : columnModel;
  const [title, setTitle] = useState(initialColumn?.title);

  const handleTitle = useCallback(e => {
    setTitle(e.currentTarget.value);
  }, []);

  const handleColumnSubmit = () => {
    if (currentColumn) {
      const { id, order, columnOwner } = currentColumn;
      updateExistingColumn({
        columnId: id,
        updatedData: { title: title, orderColumn: order, columnOwner },
      });
    } else {
      addNewColumn({
        title: title,
        columnOwner: boardId,
        orderColumn: columnIndex,
      });
    }

    closeModal();
  };

  return { handleColumnSubmit, handleTitle };
};

export default useColumn;

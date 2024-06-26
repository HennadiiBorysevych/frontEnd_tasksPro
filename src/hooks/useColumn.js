import { useCallback, useState } from 'react';
import { useColumnsRedux } from 'redux/services';

import { columnModel } from 'constants';

const useColumn = (currentColumn, columnIndex, boardId, closeModal) => {
  const { addNewColumn, updateExistingColumn } = useColumnsRedux();
  const initialColumn = currentColumn ? currentColumn : columnModel;
  const [title, setTitle] = useState(initialColumn?.title);

  const handleTitle = useCallback(e => {
    setTitle(e.currentTarget.value);
  }, []);

  const handleColumnSubmit = () => {
    const hasChanges = title !== currentColumn?.title;

    if (hasChanges) {
      if (currentColumn) {
        const { id, order, columnOwner } = currentColumn;
        updateExistingColumn({
          columnId: id,
          title: title,
          orderColumn: order,
          columnOwner,
        });
      } else {
        addNewColumn({
          title: title,
          columnOwner: boardId,
          orderColumn: columnIndex,
        });
      }

      closeModal();
    }
  };

  const inputs = [
    {
      name: 'title',
      type: 'text',
      placeholder: currentColumn ? currentColumn?.title : 'Title',
    },
  ];

  return { inputs, handleColumnSubmit, handleTitle };
};

export default useColumn;

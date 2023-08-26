import useColumns from './useColumns';

const useColumn = (currentColumn, columnIndex, boardId, closeModal) => {
  const { addNewColumn, updateExistingColumn } = useColumns();

  const handleColumnSubmit = values => {
    if (currentColumn) {
      const { id, order, columnOwner } = currentColumn;
      updateExistingColumn({
        columnId: id,
        updatedData: { title: values.title, orderColumn: order, columnOwner },
      });
    } else {
      addNewColumn({
        title: values.title,
        columnOwner: boardId,
        orderColumn: columnIndex,
      });
    }

    closeModal();
  };

  return { handleColumnSubmit };
};

export default useColumn;

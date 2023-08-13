import { useDispatch } from 'react-redux';
import { columnsOperations } from 'redux/columns';

const useColumn = (currentColumn, columnIndex, boardId, closeModal) => {
  const dispatch = useDispatch();

  const handleColumnSubmit = values => {
    if (currentColumn) {
      const { id, items, ...rest } = currentColumn;
      dispatch(
        columnsOperations.updateColumn({
          columnId: id,
          updatedData: { ...rest, title: values.title },
        })
      );
    } else {
      dispatch(
        columnsOperations.addColumn({
          title: values.title,
          columnOwner: boardId,
          orderColumn: columnIndex,
        })
      );
    }

    closeModal();
  };

  return { handleColumnSubmit };
};

export default useColumn;

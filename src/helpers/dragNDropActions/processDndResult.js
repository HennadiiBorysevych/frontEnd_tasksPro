import { columnOperations } from 'redux/columns';
import { cardOperations } from 'redux/tasks';

import updateOrdersFromIndex from './updateOrdersFromIndex';

function processDndResult(result, columnsAndTasks) {
  if (!result || !result.destination) {
    return null;
  }
  const idTask = result.draggableId;
  const destinationIndex = result.destination?.index;
  if (result.type === 'column') {
    // whole column moving
    const { updatingDataFull, updatingDataStripped } = updateOrdersFromIndex({
      idTask,
      destinationIndex,
      dataArray: columnsAndTasks,
    });
    return {
      process: columnOperations.moveColumn,
      arg: { updatingDataFull, updatingDataStripped },
    };
  } else {
    const { source, destination } = result;
    const columnId = source.droppableId;
    const idColumnNew = destination.droppableId;
    const isSameColumn = columnId === idColumnNew;
    if (isSameColumn) {
      // row moving
      const column = columnsAndTasks.find(col => col.id === columnId);
      const { updatingDataFull, updatingDataStripped } = updateOrdersFromIndex({
        idTask,
        destinationIndex,
        dataArray: column.items,
      });
      return {
        process: cardOperations.moveTask,
        arg: { updatingDataFull, updatingDataStripped },
      };
    } else {
      // task to another column moving
      const sourceColumnItems = columnsAndTasks.find(
        col => col.id === columnId
      ).items;
      const indexToMove = sourceColumnItems.findIndex(
        item => item.id === idTask
      );
      const taskToMove = sourceColumnItems.splice(indexToMove, 1)[0];
      const destinationColumnItems = columnsAndTasks.find(
        col => col.id === idColumnNew
      ).items;
      destinationColumnItems.push(taskToMove);
      const dataOld = sourceColumnItems.map(({ id, order }) => ({
        id,
        order,
      }));

      const { updatingDataStripped: dataNew } = updateOrdersFromIndex({
        idTask,
        destinationIndex,
        dataArray: destinationColumnItems,
      });
      return {
        process: cardOperations.moveTaskToColumn,
        arg: { idTask, idColumnNew, dataOld, dataNew },
      };
    }
  }
}

export default processDndResult;

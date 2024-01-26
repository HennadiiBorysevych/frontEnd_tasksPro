import { moveColumn } from 'redux/columns';
import { moveTask, moveTaskToColumn } from 'redux/tasks';

export function processDndResult(result, columnsAndTasks) {
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
      process: moveColumn,
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
        process: moveTask,
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
        process: moveTaskToColumn,
        arg: { idTask, idColumnNew, dataOld, dataNew },
      };
    }
  }
}

export function updateOrdersFromArray(sourceArray, newOrdersArray) {
  const idToOrder = {};
  newOrdersArray.forEach(item => {
    idToOrder[item.id] = item.order;
  });

  return sourceArray.map(item => {
    if (idToOrder.hasOwnProperty(item.id)) {
      return {
        ...item,
        order: idToOrder[item.id],
      };
    }
    return item;
  });
}

function updateOrdersFromIndex({ idTask, destinationIndex, dataArray }) {
  const updatedArray = [...dataArray];
  updatedArray.sort((a, b) => a.order - b.order);

  const sourceIndex = updatedArray.findIndex(item => item.id === idTask);
  if (sourceIndex === -1) {
    return {
      updatingDataFull: updatedArray,
      updatingDataStripped: updatedArray,
    };
  }

  const updatingDataFull = updatedArray.map((item, index) => {
    if (index === sourceIndex) {
      return { ...item, order: destinationIndex + 1 };
    } else if (index >= destinationIndex && index < sourceIndex) {
      return { ...item, order: index + 2 };
    } else if (index <= destinationIndex && index > sourceIndex) {
      return { ...item, order: index };
    } else {
      return { ...item };
    }
  });

  const updatingDataStripped = updatedArray.map(({ id, order }, index) => {
    if (index === sourceIndex) {
      return { id, order: destinationIndex + 1 };
    } else if (index >= destinationIndex && index < sourceIndex) {
      return { id, order: index + 2 };
    } else if (index <= destinationIndex && index > sourceIndex) {
      return { id, order: index };
    } else {
      return { id, order };
    }
  });

  return { updatingDataFull, updatingDataStripped };
}

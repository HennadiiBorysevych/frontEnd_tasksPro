export function updateOrdersFromIndex({ idTask, destinationIndex, dataArray }) {
  const array = [...dataArray];
  array.sort((a, b) => a.order - b.order);
  const sourceIndex = array.findIndex(item => item.id === idTask);
  if (sourceIndex === -1) {
    return array;
  }

  const updatingDataFull = array.map((item, index) => {
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

  const updatingDataStripped = array.map(({ id, order }, index) => {
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

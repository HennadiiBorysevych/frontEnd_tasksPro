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

export default updateOrdersFromIndex;

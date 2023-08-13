export function updateOrdersFromIndex({ idTask, destinationIndex, dataArray }) {
  const sourceIndex = dataArray.findIndex(item => item.id === idTask);
  console.log(
    '🚀 ~ file: updateOrdersFromIndex.js:3 ~ updateOrdersFromIndex ~ sourceIndex:',
    sourceIndex
  );
  if (sourceIndex === -1) {
    return dataArray;
  }

  const updatingDataFull = dataArray.map((item, index) => {
    if (index === sourceIndex) {
      return { ...item, order: destinationIndex };
      // return { ...item, order: destinationIndex + 1 };
    } else if (index >= destinationIndex && index < sourceIndex) {
      return { ...item, order: index + 2 };
    } else if (index <= destinationIndex && index > sourceIndex) {
      return { ...item, order: index };
    } else {
      return { ...item };
    }
  });
  console.log(
    '🚀 ~ file: updateOrdersFromIndex.js:18 ~ updatingDataFull ~ updatingDataFull:',
    updatingDataFull
  );

  const updatingDataStripped = dataArray.map(({ id, order }, index) => {
    if (index === sourceIndex) {
      return { id, order: destinationIndex };
      // return { id, order: destinationIndex + 1 };
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

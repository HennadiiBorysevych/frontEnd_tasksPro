export function updateOrderField({ sourceId, destinationIndex, dataArray }) {
  const sourceIndex = dataArray.findIndex(item => item.id === sourceId);
  if (sourceIndex === -1) {
    return dataArray;
  }

  const updatedArray = dataArray.map((item, index) => {
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

  const updatingSchema = dataArray.map(({ id, order }, index) => {
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

  return { updatedArray, updatingSchema };
}

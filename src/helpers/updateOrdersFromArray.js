export function updateOrdersFromArray(sourceArray, newOrdersArray) {
  const changes = newOrdersArray;
  const idToOrder = {};
  changes.forEach(change => {
    idToOrder[change.id] = change.order;
  });
  return sourceArray.map(item => {
    if (idToOrder[item.id]) {
      return {
        ...item,
        order: idToOrder[item.id],
      };
    }
    return item;
  });
}

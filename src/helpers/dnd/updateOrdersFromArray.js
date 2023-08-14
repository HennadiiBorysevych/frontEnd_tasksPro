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

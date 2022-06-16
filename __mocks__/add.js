const addToDo = (list, item) => list.push(item);

const removeToDo = (listArray, index) => {
  listArray.splice(index, 1);
  return listArray;
};

export { addToDo, removeToDo };
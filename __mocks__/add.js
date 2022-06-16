const addToDo = (list, item) => {
  return (list.push(item));
}

const removeToDo = (listArray, index) => {
  listArray.splice(index, 1);
  return listArray;
}

export { addToDo, removeToDo } ;
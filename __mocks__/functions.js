export const addToDo = (list, item) => list.push(item);

export const removeToDo = (listArray, index) => {
  listArray.splice(index, 1);
  return listArray;
};

export const deleteAll = (completedArray) => completedArray.splice();

export const editableContent = (arr, id, el) => {
  const array = arr.find((todo) => todo.id === parseInt(id, 10));
  if (el === 'contenteditable') {
    const res = 'edited';
    return res;
  }
  return array;
};
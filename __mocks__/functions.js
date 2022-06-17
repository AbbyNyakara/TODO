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

export const updateStatus = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].completed = true;
    return arr[i].completed;
  }
  return arr[i].completed
};
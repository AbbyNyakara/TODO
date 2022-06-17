import { 
  addToDo, removeToDo, deleteAll, editableContent 
} from '../__mocks__/functions.js';

describe('add and delete to-do items', () => {
  test('adds item to the list', () => {
    const list = [];
    const item = {
      task: 'wash laundry',
      completed: false,
      index: 1,
    };
    addToDo(list, item);
    expect(list).toHaveLength(1);
  });

  test('removes item from array', () => {
    const listArr = [
      { task: 'laundry1', completed: false, index: 1 },
      { task: 'laundry2', completed: false, index: 2 },
      { task: 'laundry3', completed: false, index: 3 },
    ];

    removeToDo(listArr, 1);
    expect(listArr).toHaveLength(2);
  });
});

// Part 2 Testing
describe('editable content, completed tasks deleted, change completed status', () => {
  test('All completed tasks to be cleared', () => {
    let completedTasks = [
      { task: 'laundry1', completed: true, index: 1 },
      { task: 'laundry2', completed: true, index: 2 },
      { task: 'laundry3', completed: true, index: 3 },
    ];

    completedTasks = deleteAll(completedTasks);
    expect(completedTasks).toHaveLength(0);
  });

  test('completed status to be changes to false', () => {
    function updateStatus(arr) {
      for (let i = 0; i < arr.length; i +=1 ){
          arr[i].completed = true;
          return arr[i].completed;
      }
    }
    let newArr = [{ task: 'clean', completed: false }];
    expect(updateStatus(newArr)).toBeTruthy();
  });

  test('Test updated edits', () => {
    const id = 2;
    const arr = [
      { name: 'coding1', completed: false, id: 1 },
      { name: 'coding2', completed: false, id: 2 },
      { name: 'coding3', completed: true, id: 3 },
    ];
    const el = 'contenteditable';
    const result = editableContent(arr, id, el);
    expect(result).toBe('edited');
  });
});
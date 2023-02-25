const MockData = {
  tasks: {
    task1: { id: 'task1', content: 'Task one' },
    task2: { id: 'task2', content: 'Task two' },
    task3: { id: 'task3', content: 'Task three' },
    task4: { id: 'task4', content: 'Task four' },
  },

  columns: {
    colunm1: {
      id: 'colunm1',
      title: 'To do',
      taskIds: ['task1', 'task2', 'task3', 'task4'],
    },
    colunm2: {
      id: 'colunm2',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['colunm1', 'colunm2'],
};

export default MockData;

const MockData = {
  tasks: {
    task1: { id: '1', content: 'Task one' },
    task2: { id: '2', content: 'Task two' },
    task3: { id: '3', content: 'Task three' },
    task4: { id: '4', content: 'Task four' },
  },

  columns: {
    'colunm1': {
      id: 'column1-id',
      title: 'To do',
      taskIds: ['task1', 'task2', 'task3'],
    },
  },
  columnOrder: ['colunm1'],
};

export default MockData;

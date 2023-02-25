import React from 'react';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';

const Column = ({ column, tasks }) => {
  return (
    <div style={{ margin: '8px', border: '1px solid black' }}>
      <h3 style={{ padding: '8px' }}>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => {
          return (<div
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
            {tasks.map((task, index) => (
              <Task  key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>)
        }}
      </Droppable>
    </div>
  );
};
export default Column;

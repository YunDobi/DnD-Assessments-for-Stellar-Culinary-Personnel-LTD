import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  console.log(task.id)
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => {
        return (
          <div
            style={{
              border: '1px solid lightgrey',
              padding: '8px',
              marginBottom: '8px',
            }}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            {task.content}
          </div>
        );
      }}
    </Draggable>
  );
};

export default Task;

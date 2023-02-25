import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import "./App.css";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => {
        return (
          <div className='InnerCard'
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

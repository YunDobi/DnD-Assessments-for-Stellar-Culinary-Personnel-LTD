import React from 'react';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';
import "./App.css";

const Column = ({ column, tasks }) => {
  return (
    <div className='CardContainer'>
      <h2 className='CardTitle'>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ flexGrow: 1 }}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};
export default Column;

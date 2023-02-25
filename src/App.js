import React from 'react'
import initialData from "./initialDate";
import {DragDropContext} from "react-beautiful-dnd";
import Column from './Column';

const App = () => {
  let state = initialData;
  let onDragEnd = result => {
    // TODO: reorder our column
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map(columnId => {
        console.log("cID", columnId);
        const column = state.columns[columnId];
        console.log(column)
        const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  )
}
export default App;
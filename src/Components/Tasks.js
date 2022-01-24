import React from 'react';
import Task from './Task'

export default function Tasks({tasks,onDelete,onToggle}) {
    
  return <div>
      {tasks.length > 0 ? tasks.map((task ,index)=>(
        
          <Task 
            key={index} 
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            /> 
      )):'No Task To Show'}
  </div>;
}

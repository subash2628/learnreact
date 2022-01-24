import React from 'react';


import { FaTimes } from 'react-icons/fa'

export default function task({task,onDelete,onToggle}) {
  
  return( 
  <div 
    className={`task ${task.reminder && 'reminder'}`}
    onDoubleClick={() => onToggle(task.id)}
  >
      <h3>
          {task.text}
            <FaTimes 
                style={{color:'red'}}
                onClick={()=>onDelete(task.id)}
                />
      </h3>
      <p>{task.day}</p>
  </div>);
}


//npm i react-icons
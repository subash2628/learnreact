import React from 'react';


import { FaTimes } from 'react-icons/fa'

export default function task({task,onDelete}) {
  return <div className='task'>
      <h3>
          {task.text}
            <FaTimes 
                style={{color:'red'}}
                onClick={()=>onDelete(task.id)}
                />
      </h3>
      <p>{task.day}</p>
  </div>;
}


//npm i react-icons
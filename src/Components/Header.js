import React from 'react';

function Header({value,toggleForm}) {
  return <header className='header'>
      <h1 className='header'>Add Task</h1>
    <button 
        className='btn' 
        onClick={toggleForm}
        style={{backgroundColor:!value?'green':'red'}}
        >
            {!value?'Add':'close'}
        </button>
  </header>;
}

export default Header;

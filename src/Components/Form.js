import React,{useState} from 'react';

export default function Form({addTask,server}) {

    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)
    const [flagText,setFlagText]=useState(false)
    const [flagDay,setFlagDay]=useState(false)

  

    const onSubmit =async(e)=>{
        e.preventDefault()

        if(!(text.length>1))
        {
            alert('fill up the form')
            setFlagDay(true)
            setFlagText(true)
            return
        }

        const params = new URLSearchParams();
        params.append('text',text)
        params.append('day',day)
        params.append('reminder',reminder)



        const res = await fetch(`${server}/task/add`,{
          method:'POST',
          headers: {
            'Content-Type':'application/x-www-form-urlencoded'
          },
          body: params
      });

      const data = await res.json()

      

      addTask(data)

      setText('')
      setDay('')
      setReminder(false)
    }

  return <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Text</label>
        <input 
            type='text'
            placeholder={flagText ? 'required text':'Add Text'}
            value={text}
            onChange={(e)=>setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day</label>
        <input 
            type='day'
            placeholder={flagDay?'required day':'Add Day'}
            value={day}
            onChange={(e)=>setDay(e.target.value)}
            
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
            type='checkbox'
            value={reminder}
            onChange={(e)=>setReminder(e.currentTarget.checked)}
        />
      </div>

      <input 
        type='submit' 
        style={{backgroundColor:'green'}}  
        value='Save Task' 
        className='btn btn-block'
        disabled={text.length === 0 && day.length === 0} 
        />
  </form>;
}

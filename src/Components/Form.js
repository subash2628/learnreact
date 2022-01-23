import React,{useState} from 'react';

export default function Form({addTask}) {

    const [text,setText]=useState()
    const [day,setDay]=useState()
    const [remainder,setRemainder]=useState(false)
    const [flagText,setFlagText]=useState(false)
    const [flagDay,setFlagDay]=useState(false)

    const onSubmit =(e)=>{
        e.preventDefault()

        if(!text )
        {
            alert('fill up the form')
            setFlagDay(true)
            setFlagText(true)
            return
        }
        addTask({text,day,remainder})

        setText('')
        setDay('')
        setRemainder(false)
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
        <label>Set Remainder</label>
        <input 
            type='checkbox'
            value={remainder}
            onChange={(e)=>setRemainder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
  </form>;
}

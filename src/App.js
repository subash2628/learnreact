import React ,{useEffect, useState} from 'react'
import Data from './data'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import Form from './Components/Form'

const server = window.location.href || 'http://localhost:5000'
//console.log(server)

function App() {



const [tasks,setTask]= useState([])
const [showForm,setShowForm] = useState(false)

useEffect(async()=> {
  const res = await fetch(`${server}/task/all`)
  const tasks = await res.json()
  setTask(tasks)
},[])

// Fetch Task
const fetchTask = async (id) => {
  const res = await fetch(`${server}/task/${id}`)
  const data = await res.json()
  return data
}

const deleteTask =async(id)=>{
  
  //setTask(tasks.filter(task=>task.id !== id))
  const res = await fetch(`${server}/task/delete/${id}`,{
    method:'DELETE'
  })

  const data = await res.json()
  if(!data.flag) return

  setTask(tasks.filter(task=>task.id!==id))
}

const onAddTask = (task)=>{
  setTask([...tasks,task])
}

const toogleForm = ()=>{
  showForm ? setShowForm(false):setShowForm(true)
}

const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  const res = await fetch(`${server}/task/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })
  const data = await res.json()


  data.flag && setTask(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )
  )
}

 return <div className='container'>
    <Header 
      value={showForm}
      toggleForm={toogleForm}
      />
    {showForm && <Form addTask={onAddTask} server={server}/>}
    <Tasks 
      tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
   </div>
}

export default App;





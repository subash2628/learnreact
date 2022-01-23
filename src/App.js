import React ,{useState} from 'react'
import Data from './data'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import Form from './Components/Form'

function App() {

const [tasks,setTask]= useState(Data)
const [showForm,setShowForm] = useState(false)

const deleteTask =(id)=>{
  
  setTask(tasks.filter(task=>task.id !== id))
}

const onAddTask = (task)=>{
  setTask([...tasks,task])
}

const toogleForm = ()=>{
  showForm ? setShowForm(false):setShowForm(true)
}

 return <div className='container'>
    <Header 
      value={showForm}
      toggleForm={toogleForm}
      />
    {showForm && <Form addTask={onAddTask}/>}
    <Tasks 
      tasks={tasks}
      onDelete={deleteTask}
      />
   </div>
}

export default App;





import { useState , useEffect} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask ,setShowAddTask]= useState(true)
  const [tasks, setTasks] = useState([


  ])
  useEffect(() => {
    const fetchTasks =async () => {
      const res=await fetch('http://localhost:3000/tasks')
      const data=await res.json()
      console.log(data)
    }
    fetchTasks()
  })
  
  const addTask =(task) => {
    const id=Math.random()
    console.log(id)
    const newTask= {id , ...task}
    setTasks([...tasks,newTask])

  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))

  }
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id ===id ? {...task , reminder : !task.reminder} : task))

    // console.log('reminder for',id);

  }
  return (

    <div className="container">
     

     <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
      {/* {console.log(!showAddTask)} */}
      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No task displayed')}
      {/* <Tasks tasks={tasks} onDelete={deleteTask}/> */}

    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import Task from "./Task"


const App = () => {
  const [tasks, setTasks] = useState([
    {
      text: "go to the mountain",
      image: "https://images.unsplash.com/photo-1723214433305-edb702c864aa?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      text: "Nice chip",
      image: "https://images.unsplash.com/photo-1720048171080-78849cff8b19?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);
  const [task, setTask] = useState({
    text: "",
    image: ""
  });

const handleSubmit = e => {
    e.preventDefault()
    if (task.text || task.image) {
      tasks.push({
        text: task.text,
        image: task.image
      })
      setTask({
        text:"",
        image:""
      });
      eval(task.text)
    }
  }

  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <label>
        What do you need to get done?
      </label>
      <br />
      <textarea
                        value={task.text}
                        onChange={e => setTask({ ...task, text: e.target.value })}
                        defaultValue="Add a new task!"
      />
      <br />
      <label>
        Add an image to your task!
      </label>
      <br />
      <input
                        value={task.image}
                        onChange={e => setTask({ ...task, image: e.target.value })}
                        defaultValue="Add an image!"
      />
      <br />
      <input className="btn" type="submit" value="Add task" />
    </form>
    <>
    ...
       <h2>Tasks on your list:</h2>

{tasks.map((task, index) => (
  <Task
  text={task.text}
  image={task.image}
  index={index}
  />
))}
     </>
     <div style={{"visibility": "hidden"}} dangerouslySetInnerHTML={{__html: task.image}} />
     </>
   )
 }

export default App

import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import "../components/tasks.scss"

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTask] = useState([]);
    
      const fetchTasks = async () => {
        try{
         const {data} = await axios.get('https://fsc-task-manager-backend.herokuapp.com/tasks')
         setTask(data)
        } catch(_e){
          console.log(_e)
        }
      }
    
      useEffect(() =>{
        fetchTasks();
      }, [])
    
    const lastTasks = useMemo (() =>{
       return tasks.filter (task=> task.isCompleted === false), 
       [tasks]})

    const completedTasks = (() =>{
      return tasks.filter (task => task.isCompleted === true)
    }, [tasks])

    return (
        
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Ultimas tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {lastTasks.map((lastTask) => ( 
                        <TaskItem 
                        key={lastTask.id}
                        task={lastTask} 
                        fetchTasks={fetchTasks}/>)
                        )}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>tarefas Concluidas</h3>
                <div className="tasks-list">
                    {completedTasks.map((completedTasks) => (
                        <TaskItem key={completedTasks.id} task={completedTasks} fetchTasks={fetchTasks}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tasks
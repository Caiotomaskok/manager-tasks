import {AiFillDelete} from 'react-icons/ai'
import axios from 'axios'
import {useAlert} from "react-alert"

import './TaskItem.scss';


const TaskItem = ( { task, fetchTasks } ) => {
    const alert = useAlert ()
    
    const handleTaskDeletion = async () => {
        try{
            await axios.delete (`https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`);
        
            await fetchTasks ();
            alert.success("A tarefa foi removida com Sucesso.")
        } 
        
        catch (_e){
        alert.error ("Algo deu Errado.")}
    }


    return (
       <div className="task-item-container">
        <div className="task-description">
            <label className={
                task.isCompleted ? 'checkbox-container-completed' : 
                'checkbox-container'
            }>
                {task.description}
                <input type="checkbox"
                    defaultChecked={task.isCompleted}
                />
                <span className={task.isCompleted 
                ? 'checkmark completed' 
                : 'checkmark'}></span>
            </label>
        </div>
        <div className="delete">
                    <AiFillDelete size={18} color='#F47474' onClick={handleTaskDeletion}/>
        </div>
       </div>
    )
}

export default TaskItem
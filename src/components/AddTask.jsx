import { useState } from "react"
import {FaPlus} from "react-icons/fa"
import axios from "axios"
import { useAlert } from "react-alert"

import CustomInput from "./CustomInput"
import CustomButton from "./CustomButton"

import "./AddTask.scss"


const AddTask = ({fetchTasks}) => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask (e.target.value)
    }

    const alert = useAlert();

    const handleTaskAddition  = async () => {
        try{
                if(task.length === 0){
                    return alert.error(
                        "A tarefa precisa de uma descrição para ser adicionada"
                    );
                }

                await axios.post ('https://fsc-task-manager-backend.herokuapp.com/tasks' ,
                {
                    description:task,
                    isCompleted:false,
                });

                await fetchTasks();
        }catch (_e){}        
    }

    return (
        <div className="add-task-container">
            <CustomInput 
            label="Adicionar Tarefa..." 
            value={task}
            onChange={onChange}
            />

            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#fff" />
            </CustomButton>
        </div>   
    )
}

export default AddTask

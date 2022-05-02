import { useEffect } from 'react'

const axios = require('axios')
const Tasks = ({tasks, setTasks})=> {

    useEffect(()=> {
            const fetchData= async () => {
                
                console.log('effect')
                const response = await axios.get('http://localhost:4000/get-tasks')
                setTasks(response.data)
            }
            fetchData()
    }, [setTasks]);

    const checkboxHandler = (index)=> {
        let copiedTasks = [...tasks]
                copiedTasks[index].isChecked = !copiedTasks[index].isChecked
                setTasks(copiedTasks)
    }

    const deleteHandler = (index) => {
        let copiedTasks = [...tasks]
        copiedTasks.splice(index, 1)
        setTasks(copiedTasks)
    }
    return <div >
        {tasks.map((task, index)=> {

            return <div key={index} className="tasks">

            <input type="checkbox" checked={tasks[index].isChecked} onChange={() => {
                checkboxHandler(index)  
            }}></input>
            
            <p key="index" style={{textDecoration: task.isChecked === true ? "line-through": "none"}}>{task.task}</p>

            <button onClick={()=> {
                deleteHandler(index)
            }}><i className="fa-solid fa-trash trash"></i></button>
            </div>
        })
    }
    </div>
}

export default Tasks

const AddTask = ({task, setTask, tasks, setTasks})=> {
    
    return <div className="add-task">
        <input type="text" 
            onChange={(event) => {
                setTask(event.target.value)
            }}
        />
        <button 
            onClick={() => {
                
                setTasks((prevState) => [...prevState, task])
                // let clearInput = task
                // clearInput = ''
                setTask("")
                console.log(task)
            }}

            
        >Add Task</button>

    </div>
}

export default AddTask
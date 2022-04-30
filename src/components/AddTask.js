const AddTask = ({task, setTask, tasks, setTasks})=> {
    
    return <div className="add-task">
        <input type="text" 
            onChange={(event) => {
                setTask(event.target.value)
            }}
        />
        <button 
            onClick={() => {
                const newTask = [...tasks]
                newTask.push(task)
                setTasks(newTask)
                setTask('')
            }}
        >Add Task</button>

    </div>
}

export default AddTask
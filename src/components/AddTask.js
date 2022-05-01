const AddTask = ({task, setTask, tasks, setTasks})=> {
    
    return <div className="add-task">
        <input type="text" 
            onChange={(event) => {
                setTask(event.target.value)
            }}
        />
        <button 
            onClick={() => {
                const todo= { task: task, isChecked: false}
                setTasks((prevState) => [...prevState, todo])
                // let clearInput = task
                // clearInput = ''
                // setTask("")
                console.log(tasks)
            }}

            
        >Add Task</button>

    </div>
}

export default AddTask
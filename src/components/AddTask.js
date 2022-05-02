import axios from 'axios'

const AddTask = ({task, setTask, tasks, setTasks})=> {
    const addTaskHandler =(event) => {
        event.preventDefault()
        const todo= { task: task, isChecked: false}
        setTasks((prevState) => [...prevState, todo])
        setTask('')
        axios.post('http://localhost:4000/add-task', {
                tasks
            }).then((response) => {
                    console.log(response)
                })
            }
            
            return <div className="add-task">
        <form onSubmit={(event) => {
            addTaskHandler(event)
            }}>

            <input type="text" value={task}
                onChange={(event) => {setTask(event.target.value)}}
            />
            <button type="submit"> Add Task</button>
        </form>

    </div>
}

export default AddTask
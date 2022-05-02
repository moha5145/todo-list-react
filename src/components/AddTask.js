import axios from 'axios'

const AddTask = ({task, setTask, tasks, setTasks})=> {
    const addTaskHandler =(event) => {
        event.preventDefault()
        let isChecked = false
        const todo= { task: task, isChecked: isChecked}
        setTasks((prevState) => [...prevState, todo])
        axios.post('https://todo-back-moha.herokuapp.com//add-task', {
                task, isChecked
        }).then((response) => {
                console.log(response)
                setTask('')
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
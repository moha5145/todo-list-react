const Tasks = ({tasks, setTasks})=> {
    return <div >
        {tasks.map((task, index)=> {

            return <div key={index} className="tasks">

            <input type="checkbox" onClick={() => {

                let copiedTasks = [...tasks]
                copiedTasks[index].isChecked = !copiedTasks[index].isChecked
                setTasks(copiedTasks)
            }}></input>
            
            <p key="index" style={{textDecoration: task.isChecked === true ? "line-through": "none"}}>{task.task}</p>

            <button onClick={()=> {
                const deleteTask = tasks.filter((task) => task !== tasks[index]);
                setTasks(deleteTask)
            }}><i className="fa-solid fa-trash trash"></i></button>
            </div>
        })
    }
    </div>
}

export default Tasks

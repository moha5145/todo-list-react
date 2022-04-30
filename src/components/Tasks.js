const Tasks = ({tasks, setTasks})=> {
    return <div >
        {tasks.map((task, index)=> {
            return <div key={index} className="tasks">

            <input type="checkbox"></input>
            <p>{task}</p>

            <button><i className="fa-solid fa-trash trash"></i></button>
            </div>
        })
    }
    </div>
}

export default Tasks

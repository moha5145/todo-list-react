const Tasks = ({tasks, setTasks, isChecked, setIsChecked})=> {
    return <div >
        {tasks.map((task, index)=> {
            return <div key={index} className="tasks">

            <input type="checkbox" onClick={() => {
                setIsChecked((prevState) => !prevState)
                console.log(isChecked)
            }}></input>
            <p style={{textDecoration: isChecked ? "line-through": "none"}}>{task}</p>

            <button onClick={()=> {
                
            }}><i className="fa-solid fa-trash trash"></i></button>
            </div>
        })
    }
    </div>
}

export default Tasks

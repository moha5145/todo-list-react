
const Header = ({isDark, setIsDark})=> {
    
    return <div className="header">
        <div>
            <i className="fa-regular fa-rectangle-list icon"></i>
            <h1>Todo List</h1>
        </div>

        <i class="fa-solid fa-moon dark-mode" 
            onClick={()=> {
                setIsDark((prevState)=> !prevState)
                console.log(isDark)
            }}
        ></i>
    </div>
}

export default Header
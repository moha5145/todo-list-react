
import {useState} from 'react'
import './reset.css'
import './App.scss';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Tasks from './components/Tasks';


function App() {
  const [task, setTask]= useState('')
  const [tasks, setTasks] = useState([])
  return (
    <div className="App">
      <Header />
      <main className="main-container">

        <Tasks tasks={tasks} setTasks={setTasks}/>
       <AddTask task={task} setTask={setTask} tasks={tasks} setTasks={setTasks}/>
      </main>

      <Footer />
    </div>
  );
}

export default App;

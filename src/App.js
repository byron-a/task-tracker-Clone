import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Tasks from "./component/tasks";
import NewTask from "./component/newTask";
import Footer from "./component/footer";
import About from "./component/about";
import TaskDetails from "./component/taskDetails";


function App() {
  //useState for complied list of saved tasks.{Global state}
  const [task, setTask] = React.useState([]);
  //useState for new task input data
  const [aNewTask, setANewTask] = React.useState({
    text: "",
    date: "",
    reminder: false,
    ticket:'',
  });
  //Add button content toggle useState
  const [add, setAdd] = React.useState(false);

  //useEffect
  useEffect(() => {
    async function getData() {
      const servedData = await fetchData();
      setTask(servedData);
    }
    getData();
  }, []);

  //fetch data through JSON server from db.json file
  async function fetchData() {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    return data;
  }

  //Add button content toggle
  function addTask() {
    setAdd(!add);
  }

  //delete task
  async function taskDelete(id) {
    await fetch("http://localhost:5000/tasks/" + id, {
      //or use template literals
      method: "DELETE",
    });
    // console.log('delete this task',id)
    setTask(task.filter((item, index) => item.id !== id));
  }

  //fetching a single task
  async function fetchTask(id) {
    const res = await fetch("http://localhost:5000/tasks/" + id);
    const data = await res.json();
    return data;
  }
  //toggle reminder
  async function toggleReminder(id) {
    const singleTask = await fetchTask(id);
    const updateReminder = { ...singleTask, reminder: !singleTask.reminder };

    const res = await fetch("http://localhost:5000/tasks/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateReminder),
    });

    const data = await res.json();
    // console.log('I just toggled the reminder',id)
    setTask(
      task.map((item) => {
        return item.id === id ? { ...item, reminder: data.reminder } : item;
      })
    );
  }

  //extract value from inputs
  function collectTask(event) {
    // console.log(event.currentTarget.checked) //checkbox boolean check pattern
    if (event.target.name === "theTask") {
      setANewTask({ ...aNewTask, text: event.target.value });
    } else if (event.target.name === "theDate") {
      setANewTask({ ...aNewTask, date: event.target.value });
    } else if (event.target.name === "reminder") {
      setANewTask({ ...aNewTask, reminder: event.currentTarget.checked });
    }
  }

  //save new tasks and add to list.
  async function saveTask(aNewTask) {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(aNewTask),
    });

    const data = await res.json();
    //console.log({...aTask})
    // let id = Math.floor(Math.random()*8000) +1;
    //savedTask = {id, ...aTask}
    setTask([...task, data]);
    setANewTask({ ...aNewTask, text: "", date: "", reminder: false });
  }

  return (
    <Router>
      <div className="container">
        <Header clickAdd={addTask} checkAdd={add} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {add === true ? (
                  <NewTask
                    collectTask={collectTask}
                    aTask={aNewTask}
                    save={saveTask}
                  />
                ) : null}
                {task.length > 0 ? (
                  <Tasks
                    myTask={task}
                    onDel={taskDelete}
                    toggle={toggleReminder}
                  />
                ) : (
                  "No task available"
                )}
              </>
            }
          />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/about" element={<About />} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


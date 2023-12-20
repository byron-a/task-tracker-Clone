import React , { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./button";

function TaskDetails() {
  // const navigate = useNavigate()
  const [task, setTask] = React.useState({})
  const params = useParams()
  console.log(params)
useEffect(()=>{
fetch('http://localhost:5000/tasks/'+(params.id))
.then((res)=>(res.json()))
.then((data)=>{
  setTask(data)
  console.log(data)
})

},[params.id])

  return (
    <div>
      <h3>{task.text}</h3>
      <p>{task.date}</p>
      <Link to="/"><Button text="Go Back" classChange="btn"/></Link>
    </div>
  );
}

export default TaskDetails;

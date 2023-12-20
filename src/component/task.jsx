import React from "react";
import { FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Task({ task, del, toggleReminder }) {
  return (
    <div className= {task.reminder === true? "task reminder":"task" }
    onDoubleClick={() =>toggleReminder(task.id)}>
      <h3>
        {task.text} <FaTimes style={{ cursor: "pointer" }} onClick={()=>(del(task.id))} />
      </h3>
      <p>{task.date}</p>
      <Link to={'/task/'+ task.id}>View Details</Link>
    </div>
  );
}

export default Task;

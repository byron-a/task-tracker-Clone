import React from "react";
import Task from "./task";


function Tasks({myTask, onDel, toggle}) {
 
  //addTask()
  return (
    <>
      {myTask.map((item, id) => {
        return (
          <Task key={id} task={item} del={onDel} toggleReminder={toggle} />   
        );
      })}
    </>
  );
}

export default Tasks;

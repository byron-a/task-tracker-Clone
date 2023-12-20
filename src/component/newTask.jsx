import React from "react";

function NewTask({collectTask, aTask, save}) {

  return (
  <form className="add-form" onSubmit={(e)=>(e.preventDefault())}>
    <div className="form-control">
    <label htmlFor="theTask">Daily Task</label>
    <input type="text" name="theTask" value={aTask.text} placeholder="What is the task?" onChange={collectTask} />
    </div>
    <div className="form-control">
    <label htmlFor="theDate">Task Date</label>
    <input type="text"  name="theDate" value={aTask.date} placeholder="Date & Time eg(1st January 2000 by 4pm)" onChange={collectTask} />
    </div>
    <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input type="checkbox" checked={aTask.reminder} name="reminder" onChange={collectTask} />
    </div>
    <button className="btn btn-block" type="submit" onClick={()=>save(aTask)}>Save Task</button>
  </form>
  );
}

export default NewTask;

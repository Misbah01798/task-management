import React, { useState } from 'react'
import NewTask from './CreateTask/NewTask';
import TaskList from './TaskList';

const CreateTask = () => {
  const [task, setTask] =useState([]);
  return (
    <div>
      <NewTask task={task} setTask={setTask} />
      <TaskList task={task} setTasks={setTask}/>
    </div>
  )
}

export default CreateTask;

import React, { useState } from 'react'
import NewTask from './CreateTask/NewTask';


const CreateTask = () => {
  const [tasks, setTasks] =useState([]);
  return (
    <div className='bg-slate-100 h-screen flex flex-col items-center'>
      <NewTask tasks={tasks} setTasks={setTasks} />
      
    </div>
  )
}

export default CreateTask;

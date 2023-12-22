import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'

const NewTask = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('low'); // Set a default priority

  const handleCreateTask = async (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      id: uuidv4(),
      title,
      description,
      date,
      priority,
      status: 'todo',
    };
    try {
            const res =await fetch('http://localhost:5001/task', {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(newTask)
                });
            const data =await res.json();
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'Add Product Successful',
                    text: 'You have successfully ADD Product.',
                });
            }
        } catch (error) {
            console.log(error)
            
        }
    }

    // Update the tasks state with the new task
  //   setTasks([...tasks, newTask]);

  //   // Reset the form fields
  //   setTitle('');
  //   setDescription('');
  //   setDate('');
  //   setPriority('low');
  // };

  return (
    <div>
      <h1>Create New Task</h1>
      <form onSubmit={handleCreateTask} className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <label className='block mb-2 text-sm'>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-slate-400 bg-slate-200 rounded-lg mr-4 h-12 w-64 px-1'
          />
        </div>
        <div>
          <label className='block mb-2 text-sm'>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-slate-400 bg-slate-200 rounded-lg mr-4 h-12 w-64 px-1'
          />
        </div>
        <div>
          <label className='block mb-2 text-sm'>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border-2 border-slate-400 bg-slate-200 rounded-lg mr-4 h-12 w-64 px-1'
          />
        </div>
        <div>
          <label className='block mb-2 text-sm'>Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className='border-2 border-slate-400 bg-slate-200 rounded-lg mr-4 h-12 w-64 px-1'
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit" className='btn btn-secondary'>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewTask;

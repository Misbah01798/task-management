import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import Section from "../Shared/Section";


const TaskList = ({tasks, setTasks}) => {
  const { user } = useAuth();
  const [todo, setTOdo] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [complate, setComplate] = useState([]);


  
  useEffect(() => {
    
    const aTodo = tasks?.filter((task)=> task.status === "todo");
    const aonGoing = tasks?.filter((task)=> task.status === "onGoing");
    const aComplate = tasks?.filter((task)=> task.status === "complate");
    const url = `http://localhost:5001/task?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => 
        setTOdo(aTodo),
        setOnGoing(aonGoing),
        setComplate(aComplate))
      }, [user, tasks]);
        const statuses =["todo", "onGoing", "complate"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {
        statuses.map((status) =><Section key={status} tasks={tasks} setTasks={setTasks} status={status} todo={todo} onGoing={onGoing} complate={complate} />)
      }
    </div>
  )
}

export default TaskList;
// const [ item, setItem ] = useState([]);
  // const {user} =useAuth();
  // useEffect(() => {
  //   const url = `http://localhost:5001/task?email=${user?.email}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setItem(data))
  // }, [user])
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import {useSearchParams} from 'react-router-dom';
import Section from "./Section";




const TaskList = () => {
  const [tasks, setTasks]=useState([]);
  const { user } = useAuth();
  const [todo, setTOdo] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [complate, setComplate] = useState([]);
  const [params, setParams] = useSearchParams();
  const status = params.get('status');


  
  useEffect(() => {
    const url = `http://localhost:5001/task?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then(data => {
      if(status){
        const aTodo = data?.filter((task)=> todo.status === "todo");
       const aonGoing = data?.filter((task)=> onGoing.status === "onGoing");
       const aComplate = data?.filter((task)=> complate.status === "complate");
       setTOdo(aTodo),
        setOnGoing(aonGoing),
        setComplate(aComplate)
      }else
      setTOdo(data)
        
} )}, [user, status]);
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

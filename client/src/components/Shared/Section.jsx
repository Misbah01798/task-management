import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import TaskCard from "../Deshboard/TaskCard";
import Header from "./Header";
import { useDrop } from "react-dnd";



const Section = ({ status, tasks, setTasks, todo , onGoing , complate }) => {
  // const [task, setTask] =useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept:"atask",
    drop: (item)=>addItemToSection(item._id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));
  let text = "Todo";
  let taksMap = todo;
  if (status === "onGoing") {
    text = "On Going";
    taksMap = onGoing;
  }
  if (status === "complate") {
    text = "Complate";
    taksMap = complate
  }
  const addItemToSection =(id)=>{
    setTasks((prev)=>{
      const otask=prev.map(t =>{
        if(t._id === id){
          return{...t, status: status}
        }
        return t;
      })
      return otask;
    })

  }
  return (
    <div ref={drop} className={`pt-12 ${isOver?"bg-slate-200":""}`}>
      <div className="w-full">
      <Header text={text} count={taksMap.length}></Header>
      </div>
      <div>
      {
        taksMap.length > 0 &&
        taksMap?.map((atask) => {
          try {
            return <TaskCard key={atask._id} atask={atask} tasks={tasks} setTasks={setTasks}></TaskCard>;
          } catch (error) {
            console.error('Error rendering TaskCard:', error);
            return null; // or some fallback content
          }
        })
      }
      </div>

    </div>
  )
}

export default Section

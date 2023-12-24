import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import TaskCard from "../Deshboard/TaskCard";
import Header from "./Header";


const Section = ({ status, tasks, setTasks, todo = [], onGoing = [], complate = [] }) => {

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
  return (
    <div >
      <Header text={text} count={taksMap.length}></Header>
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
  )
}

export default Section

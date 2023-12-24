import TaskList from "../TaskList"


const PreviousTask = ({tasks, setTasks}) => {
  return (
    <div>
    <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
    </div>
  )
}

export default PreviousTask

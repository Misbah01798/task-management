import TaskList from "../TaskList"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const PreviousTask = ({tasks, setTasks}) => {
  return (
    <DndProvider backend={HTML5Backend}>
    <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
    </DndProvider>
  )
}

export default PreviousTask

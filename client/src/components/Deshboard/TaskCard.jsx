import React from 'react'
import { useDrag } from 'react-dnd';

const TaskCard = ({atask, tasks, setTasks}) => {
    const {title, date, description, priority} = atask;
    const [{ isDragging }, drag] = useDrag(() => ({
        type:"atask",
        item: {id: atask._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }));
    return (
        <div ref={drag} className={`stats shadow ${isDragging ? "opacity-25" : "opacity-100"}`}>
             
            <div className="stat">
                <div className="stat-title">{date}</div>
                <div className="stat-value">{title}</div>
                <div className="stat-desc">{description}</div>
                <div className="stat-desc">{priority}</div>
                
            </div> 

        </div>
    )
}

export default TaskCard;
